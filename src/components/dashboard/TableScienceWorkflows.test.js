const TableScienceWorkflows = require("./TableScienceWorkflows")
// @ponicode
describe("onColumnToggleTableScienceWorkflows", () => {
    let inst

    beforeEach(() => {
        inst = new TableScienceWorkflows.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onColumnToggleTableScienceWorkflows({ value: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onColumnToggleTableScienceWorkflows({ value: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onColumnToggleTableScienceWorkflows({ value: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onColumnToggleTableScienceWorkflows(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
