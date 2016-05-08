import {describe, it} from "mocha"
import {expect} from "chai"
import help from "./index.js"

describe("ui/reducers", () => {
  describe("help()", () => {
    describe("when CLOSE_MODAL is called", () => {
      const action = {
        type: "CLOSE_MODAL"
      }

      describe("when already open", () => {
        const state = {
          open: true
        }

        it("closes the modal", () => {
          expect(help(state, action)).to.have.property("help").that.deep.equals({
            open: false
          })
        })
      })
    })
  })
})
