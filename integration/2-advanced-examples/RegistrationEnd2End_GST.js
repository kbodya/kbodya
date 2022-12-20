import {NavigateTo} from "../../support/page_objects/between_pages"
import {URL} from "./selectors/RegistrationProcessEnd2End.json"

describe ('User is able to registed a Student in ME timetable', () => {

    it ('fill up all required fields on personalisation and proceed to Step 2', () => {
    cy.visit (URL)
    NavigateTo.FillUpFirstPage() //Fill up first step 

})
    it ('fill up all required fields on further-details and proceed to Step 3', () => {
    NavigateTo.FillUpSecondPage()

})
    it ('Choose timetable and proceed to QTY Students', () => {
    NavigateTo.FillUpThirdPage()

})
    it ('Choose QTY Students and proceed to Student Info Page', () => {
    NavigateTo.FillUpFourthPage()

})
    it ('Fill up Student Info and proceed to YG and proceed to Qualification and choose Qualification', () => {
    NavigateTo.FillUpFivePage()

})

})