import {Gender} from "./page-object/StudInf.json"
import {GenderDrop} from "./page-object/StudInf.json"
import {Nationality} from "./page-object/StudInf.json"
import {NationalityDrop} from "./page-object/StudInf.json"
import {FirstLanguage} from "./page-object/StudInf.json"
import {FirstLanguageDrop} from "./page-object/StudInf.json"
import {ContactNumberSI} from "./page-object/StudInf.json"
import {UK} from "./page-object/StudInf.json"
import {ContactNumberDig} from "./page-object/StudInf.json"
import {StudentInformationSave} from "./page-object/StudInf.json"
import {URLStudentInformation} from "./page-object/StudInf.json"
import {AddressLine1SI} from "./page-object/StudInf.json"
import {AddressLine2SI} from "./page-object/StudInf.json"
import {CitySI} from "./page-object/StudInf.json"
import {PostalCodeSI} from "./page-object/StudInf.json"
import {Radiobutton} from "./page-object/StudInf.json"
import {CountryOfResidence} from "./page-object/StudInf.json"
import {CountryOfResidenceDrop} from "./page-object/StudInf.json"
import {StudentInformation} from "./page-object/StudInf.json"

// import {PostalCodeSI} from "./selectors/StudInf.json"
// import {Radiobutton} from "./selectors/StudInf.json"
// import {CountryOfResidence} from "./selectors/StudInf.json"
// import {CountryOfResidenceDrop} from "./selectors/StudInf.json"
// import {StudentInformation} from "./selectors/StudInf.json"



describe('User can fill out required fields', () => 
it ('Can open Student Information page and fill upp required fields', () => {

    cy.visit (URLStudentInformation)
    cy.get (StudentInformation).click()
    cy.get (Gender).click()
    cy.get (GenderDrop).click()
    cy.wait(1000)
    cy.get (Nationality).click()
    cy.get (NationalityDrop).click()
    cy.wait(1000)
    cy.get (FirstLanguage).click()
    cy.get (FirstLanguageDrop).click()
    cy.wait(1000)
    cy.get (ContactNumberSI).click()
    cy.get (UK).click()
    cy.wait(1000)
    cy.get (ContactNumberDig).type('1234567890')
    cy.get (StudentInformationSave).click()
    cy.wait (3000)
}))


describe('User can fill out required fields', () => 
it ('Can open Student Information page and fill upp required fields', () => {

    cy.visit (URLStudentInformation)
    cy.wait (2000)
    cy.get (StudentInformation).click()
    cy.get (Radiobutton).click()
    cy.get (CountryOfResidence).click()
    cy.get (CountryOfResidenceDrop).click()
    cy.get (AddressLine1SI).type ('2222 N Farwell Ave')
    cy.get (AddressLine2SI).type ('2222 N Farwell A 200')
    cy.get (CitySI).type ('Kyiv')
    cy.get (PostalCodeSI).type ('12345Qa')
    cy.get (StudentInformationSave).click()
    cy.contains('Complete').should('be.visible')

}))