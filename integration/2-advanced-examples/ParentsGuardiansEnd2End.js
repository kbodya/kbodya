import {ParrentGuardian} from "./selectors/StudentInfo.json"
import {URL} from "./selectors/StudentInfo.json"
import {StudentInformation} from "./selectors/StudentInfo.json"
import {AdditionalStudentSupport} from "./selectors/StudentInfo.json"
import {RemainingFee} from "./selectors/StudentInfo.json"
import {AddParentGuardian} from "./selectors/StudentInfo.json"
import {FirstName} from "./selectors/StudentInfo.json"
import {LastName} from "./selectors/StudentInfo.json"
import {Relationsip} from "./selectors/StudentInfo.json"
import {EmailAddress} from "./selectors/StudentInfo.json"
import {ContactNumber} from "./selectors/StudentInfo.json"
import {AddressLine1} from "./selectors/StudentInfo.json"
import {City} from "./selectors/StudentInfo.json"
import {PostalCode} from "./selectors/StudentInfo.json"
import {Father} from "./selectors/StudentInfo.json"
import {CountryOfResidence} from "./selectors/StudentInfo.json"
import {UK} from "./selectors/StudentInfo.json"
import {ParentsGuardiansSave} from "./selectors/StudentInfo.json"
import {DeleteParentGuardian} from "./selectors/StudentInfo.json"
import {DeletePopup} from "./selectors/StudentInfo.json"
import {ParentsGuardianEdit} from "./selectors/StudentInfo.json"

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







