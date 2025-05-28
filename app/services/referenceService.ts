export async function getAllReferenceData() {
    const [years, grades, levels, schools, disciplines, subjects, subgroupTypes, subgroups] =
        await Promise.all([
            fetch('/api/years').then(res => res.json()),
            fetch('/api/grades').then(res => res.json()),
            fetch('/api/levels').then(res => res.json()),
            fetch('/api/schools').then(res => res.json()),
            fetch('/api/disciplines').then(res => res.json()),
            fetch('/api/subjects').then(res => res.json()),
            fetch('/api/subgroupTypes').then(res => res.json()),
            fetch('/api/subgroups').then(res => res.json()),
        ]);

    return { years, grades, levels, schools, disciplines, subjects, subgroupTypes, subgroups };
}
