const fetch = require("node-fetch")
const swapi = require("./script2")

const script2 = require("./script2")
it('calls swapi to get people', () => {
    expect.assertions(1);
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);

    })
})

it('calls swapi to get people with a promise', () => {
    expect.assertions(2);

    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5)
    })
})

// @ponicode
describe("script2.getPeoplePromise", () => {
    test("0", () => {
        let callFunction = () => {
            script2.getPeoplePromise(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            script2.getPeoplePromise(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            script2.getPeoplePromise(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("script2.getPeople", () => {
    test("0", async () => {
        await script2.getPeople(true)
    })

    test("1", async () => {
        await script2.getPeople(false)
    })

    test("2", async () => {
        await script2.getPeople(undefined)
    })
})
