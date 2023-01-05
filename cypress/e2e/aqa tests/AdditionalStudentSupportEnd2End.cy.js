import {SpecialNeedsYes} from "./page-object/AdditionalStudentSupport.json"
import {SpecialNeedsNo} from "./page-object/AdditionalStudentSupport.json"
import {DisabilityYes} from "./page-object/AdditionalStudentSupport.json"
import {DisabilityNo} from "./page-object/AdditionalStudentSupport.json"
import {TextField} from "./page-object/AdditionalStudentSupport.json"
import {AdditionalStudSuoURL} from "./page-object/AdditionalStudentSupport.json"
import {AdditionalStudentSupport} from "./page-object/AdditionalStudentSupport.json"
import {AdditionalSupportSave} from "./page-object/AdditionalStudentSupport.json"
import {CommunicationAndInteraction} from "./page-object/AdditionalStudentSupport.json"



describe('User can check all No and Save page', () => 
it ('User can proceed to AdditionalSupportPAge and save page with NO options', () => {
    
    cy.visit (AdditionalStudSuoURL)
    cy.get (AdditionalStudentSupport).click()
    cy.get (SpecialNeedsNo).click()
    cy.get (DisabilityNo).click()
    cy.get (AdditionalSupportSave).click()
    cy.wait (1000)
    cy.contains('Complete').should('be.visible')
    
})) 

describe('Does your child have a disability? - True, adding text and save', () => 
it ('User can check Does your child have a disability? - Yes and add text and save', () => {

    cy.visit (AdditionalStudSuoURL)
    cy.get (AdditionalStudentSupport).click()
    cy.get (DisabilityYes).click()
    cy.get (TextField).type ('This is test message')
    cy.get (AdditionalSupportSave).click()
    cy.wait (1000)

}))

describe('Special needs - true and options, disability - no and text', () => 
it ('User can check Does your child have any special educational needs? Yes and options and disability No and add text and Save', () => {

    cy.visit (AdditionalStudSuoURL)
    cy.get (AdditionalStudentSupport).click()
    cy.get (SpecialNeedsYes).click()
    cy.get (CommunicationAndInteraction).click()
    { multiple: true }
    cy.get (DisabilityNo).click()
    cy.get (TextField).type ('This is a test message for AQA')
    cy.get (AdditionalSupportSave).click()

}))