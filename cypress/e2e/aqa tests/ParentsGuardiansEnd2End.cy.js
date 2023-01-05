import {ParrentGuardian} from "./page-object/StudentInfo.json"
import {URL} from "./page-object/StudentInfo.json"
import {StudentInformation} from "./page-object/StudentInfo.json"
import {AdditionalStudentSupport} from "./page-object/StudentInfo.json"
import {RemainingFee} from "./page-object/StudentInfo.json"
import {AddParentGuardian} from "./page-object/StudentInfo.json"
import {FirstName} from "./page-object/StudentInfo.json"
import {LastName} from "./page-object/StudentInfo.json"
import {Relationsip} from "./page-object/StudentInfo.json"
import {EmailAddress} from "./page-object/StudentInfo.json"
import {ContactNumber} from "./page-object/StudentInfo.json"
import {AddressLine1} from "./page-object/StudentInfo.json"
import {City} from "./page-object/StudentInfo.json"
import {PostalCode} from "./page-object/StudentInfo.json"
import {Father} from "./page-object/StudentInfo.json"
import {CountryOfResidence} from "./page-object/StudentInfo.json"
import {UK} from "./page-object/StudentInfo.json"
import {ParentsGuardiansSave} from "./page-object/StudentInfo.json"
import {DeleteParentGuardian} from "./page-object/StudentInfo.json"
import {DeletePopup} from "./page-object/StudentInfo.json"
import {ParentsGuardianEdit} from "./page-object/StudentInfo.json"



describe('User can open all tabs on Dashboard page', () => 
it ('Can open a Dashboard page and open all tabs', () => {
    cy.visit(URL)   
    cy.wait(2000) 
    cy.get(ParrentGuardian).click()
    cy.wait(2000)
    cy.get(StudentInformation).click()
    cy.wait(2000)
    cy.get(AdditionalStudentSupport).click()
    cy.wait(2000)
    cy.get(RemainingFee).click()
}))

describe ('User can Edit Parent/Gualdian', () => 
it ('Open a Parent/Guardian and Edit', () =>{ 
    cy.visit (URL)
    cy.get (ParrentGuardian).click()
    cy.get (ParentsGuardianEdit).click() 
    { multiple: true }
    cy.get (FirstName).clear()
    cy.get (FirstName).type ("BogdanEdit TEST")
    cy.get (LastName).clear()
    cy.get (LastName).type ("Bogdan LN Edit TEST")
    cy.get (ParentsGuardiansSave).click()
    cy.wait(2000)
}))

describe ('User can add one more Parent/Guardian', () => 
it ('Open a Parent/Guardian and add one more', () =>{
    cy.visit(URL)
    cy.wait(2000)
    cy.get (ParrentGuardian).click()
    cy.wait(1000)
    cy.get (AddParentGuardian).click()
    cy.get (FirstName).type ('Bogdan')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (LastName).type ('Testing')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (Relationsip).click()
    cy.get (Father).click()
    cy.get (EmailAddress).type('bogdan.test.customer@gmail.com')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (ContactNumber).type('1234567890')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (AddressLine1).type ('2222 N Farwell Ave #200')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (City).type ('Kyiv')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (PostalCode).type ('04071')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (CountryOfResidence).click()
    cy.get(UK).click()
    cy.get(ParentsGuardiansSave).click()
    cy.wait(2000)
    cy.contains('Complete').should('be.visible')
}))

describe ('User can delete Parent/Gualdian', () => 
it ('Delete ParentGuardian', () =>{ 
    cy.visit (URL)
    cy.get (ParrentGuardian).click()
    cy.get (DeleteParentGuardian).click()
    cy.get (DeletePopup).click()
    cy.wait(2000)
}))







