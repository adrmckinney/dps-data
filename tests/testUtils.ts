// This is mocking the data…I don't want to do this. Leaving here for now
export function mockRequest(body: unknown = {}, method = 'POST'): Request {
    return new Request('http://localhost/api', {
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
