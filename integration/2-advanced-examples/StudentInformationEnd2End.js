import {Gender} from "./selectors/StudInf.json"
import {GenderDrop} from "./selectors/StudInf.json"
import {Nationality} from "./selectors/StudInf.json"
import {NationalityDrop} from "./selectors/StudInf.json"
import {FirstLanguage} from "./selectors/StudInf.json"
import {FirstLanguageDrop} from "./selectors/StudInf.json"
import {ContactNumberSI} from "./selectors/StudInf.json"
import {UK} from "./selectors/StudInf.json"
import {ContactNumberDig} from "./selectors/StudInf.json"
import {StudentInformationSave} from "./selectors/StudInf.json"
import {URLStudentInformation} from "./selectors/StudInf.json"
import {AddressLine1SI} from "./selectors/StudInf.json"
import {AddressLine2SI} from "./selectors/StudInf.json"
import {CitySI} from "./selectors/StudInf.json"
import {PostalCodeSI} from "./selectors/StudInf.json"
import {Radiobutton} from "./selectors/StudInf.json"
import {CountryOfResidence} from "./selectors/StudInf.json"
import {CountryOfResidenceDrop} from "./selectors/StudInf.json"
import {StudentInformation} from "./selectors/StudInf.json"




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