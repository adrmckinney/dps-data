import { execSync } from 'child_process'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Load environment variables from .env
dotenv.config()

// Recreate __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const MIGRATIONS_DIR = path.join(__dirname, '../prisma/migrations')
const migrations = fs
  .readdirSync(MIGRATIONS_DIR)
  .filter((f) => fs.statSync(path.join(MIGRATIONS_DIR, f)).isDirectory())
  .sort((a, b) => (a > b ? -1 : 1)) // Descending order

if (!migrations.length) {
  console.log('❌ No migrations found.')
  process.exit(1)
}

const latestMigration = migrations[0]
const downPath = path.join(MIGRATIONS_DIR, latestMigration, 'migration_down.sql')

if (!fs.existsSync(downPath)) {
  console.log(`❌ No migration_down.sql found in ${latestMigration}`)
  process.exit(1)
}

// Parse database name from DATABASE_URL
const dbUrl = process.env.DATABASE_URL
if (!dbUrl) {
  console.error('❌ DATABASE_URL is not defined in .env')
  process.exit(1)
}

let dbName: string
try {
  const parsed = new URL(dbUrl)
  dbName = parsed.pathname.slice(1) // remove leading slash
} catch (err) {
  console.error('❌ Failed to parse DATABASE_URL:', err)
  process.exit(1)
}

console.log(`🔁 Rolling back: ${latestMigration}`)

try {
  execSync(`psql ${dbName} -f "${downPath}"`, { stdio: 'inherit' })
  console.log('✅ Rollback successful.')
} catch (err) {
  console.error('❌ Rollback failed.', err)
}
