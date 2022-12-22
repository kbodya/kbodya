import {URL} from "./selectors/RegistrationProcessEnd2End.json"
import {FirstName} from "./selectors/RegistrationProcessEnd2End.json"
import {LastName} from "./selectors/RegistrationProcessEnd2End.json"
import {EmailAddress} from "./selectors/RegistrationProcessEnd2End.json"
import {Checkbox} from "./selectors/RegistrationProcessEnd2End.json"
import {CountryOfResidence} from "./selectors/RegistrationProcessEnd2End.json"
import {UK} from "./selectors/RegistrationProcessEnd2End.json"
import {ContactNumber} from "./selectors/RegistrationProcessEnd2End.json"
import {AddressLine1} from "./selectors/RegistrationProcessEnd2End.json"
import {AddressLine2} from "./selectors/RegistrationProcessEnd2End.json"
import {City} from "./selectors/RegistrationProcessEnd2End.json"
import {PostalCode} from "./selectors/RegistrationProcessEnd2End.json"
import {Continue} from "./selectors/RegistrationProcessEnd2End.json"
import {PlusStudent} from "./selectors/RegistrationProcessEnd2End.json"
import {StudentFirstName} from "./selectors/RegistrationProcessEnd2End.json"
import {StudentLastName} from "./selectors/RegistrationProcessEnd2End.json"
import {StudentDateOfBirth} from "./selectors/RegistrationProcessEnd2End.json"
import {CountryOfResidence2} from "./selectors/RegistrationProcessEnd2End.json"
import {DesiredStartDate} from "./selectors/RegistrationProcessEnd2End.json"
import {StartDate} from "./selectors/RegistrationProcessEnd2End.json"
import {Next} from "./selectors/RegistrationProcessEnd2End.json"
import {DesiredDate} from "./selectors/RegistrationProcessEnd2End.json"
import {QualificationUK} from "./selectors/RegistrationProcessEnd2End.json"
import {Chemistry} from "./selectors/RegistrationProcessEnd2End.json"
import {Biology} from "./selectors/RegistrationProcessEnd2End.json"
import {ComputerScience} from "./selectors/RegistrationProcessEnd2End.json"
import {Physics} from "./selectors/RegistrationProcessEnd2End.json"
import {AddAditSubjects} from "./selectors/RegistrationProcessEnd2End.json"
import {ProceedtoNextStep} from "./selectors/RegistrationProcessEnd2End.json"
import {DramaSevenY} from "./selectors/RegistrationProcessEnd2End.json"
import {STEMSevenY} from "./selectors/RegistrationProcessEnd2End.json"
import {ParrentGuarEdit} from "./selectors/RegistrationProcessEnd2End.json"
import {OneStudentDel} from "./selectors/RegistrationProcessEnd2End.json"
import {TwoStudentDel} from "./selectors/RegistrationProcessEnd2End.json"
import {StudentDelPopupYes} from "./selectors/RegistrationProcessEnd2End.json"
import {Terms} from "./selectors/RegistrationProcessEnd2End.json"
import {Confirm} from "./selectors/RegistrationProcessEnd2End.json"
import {ErrorValidation} from "./selectors/RegistrationProcessEnd2End.json"
import {applyDiscountButton} from "./selectors/RegistrationProcessEnd2End.json"
import {openDiscountBlock} from "./selectors/RegistrationProcessEnd2End.json"
import {applyDiscountDisabled} from "./selectors/RegistrationProcessEnd2End.json"
import {discountCodeTextField} from "./selectors/RegistrationProcessEnd2End.json"
import {relationshipType} from "./selectors/RegistrationProcessEnd2End.json"
import {chooseMother} from "./selectors/RegistrationProcessEnd2End.json"
import {newDateSep2023} from "./selectors/RegistrationProcessEnd2End.json"
import {Sep2023student2} from "./selectors/RegistrationProcessEnd2End.json"
import {} from "./selectors/RegistrationProcessEnd2End.json"
import {} from "./selectors/RegistrationProcessEnd2End.json"
import {} from "./selectors/RegistrationProcessEnd2End.json"
import {} from "./selectors/RegistrationProcessEnd2End.json"



describe ('User is able to register a three Students and successfully proceed to payment floy', () => {

it ('User is not able to proceed if required fields is not pre-filled', () => {
    cy.visit (URL)
    cy.get (Next).should('be.disabled')

})

it ('Button is disabled if required fields is required fields is not filled', () => {

    cy.visit (URL)
    cy.get (Next).should('be.disabled')

})
    
it ('User is able to fill up all fields on Step1 and proceed to next Step2', () => {

    cy.visit (URL)
    cy.title().should('eq', 'InterHigh Registration')
    cy.contains ('Estimated time remaining:').should('be.visible')
    cy.get (FirstName).type ('AQA Bogdan Test')
    cy.get (LastName).type ('AQA Kalina')
    cy.get (EmailAddress).type ('bogdan.test.customer@gmail.com')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (relationshipType).click()
    cy.get(chooseMother).click()
    cy.get (Next).should('be.visible')
    cy.get (Next).click()

})

it ('User is able to to fill up further details and pass a timetable', () => {
    cy.wait (1000)
    cy.get (CountryOfResidence).click()
    cy.get (UK).click()
    cy.get (ContactNumber).type (1234567890)
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (AddressLine1).type ('2222 Automation Test 123')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (AddressLine2).type ('AQA123456')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (City).type ('London')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (PostalCode).type ('Qa12345')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (Continue).click()
    cy.wait (1000)
    cy.get (Continue).click()
    
})

it ('User is able to add Students and fill up Student Info and choose YG', () => {

    cy.get (PlusStudent).dblclick() //Doule click on add student button
    cy.get (Continue).click()
    cy.contains ('Tell us about your first student').should('be.visible') //Student 1 adding
    cy.get (StudentFirstName).type ('Automation Student 1')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (StudentLastName).type ('Automation Student 1')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (StudentDateOfBirth).type ('2006-12-12') //Y10
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (CountryOfResidence2).click()
    cy.get (UK).click()
    cy.get (DesiredStartDate).click()
    cy.get (DesiredDate).click()
    cy.get (Continue).click()
    cy.wait (1000)
    cy.get (Continue).click()
    cy.wait (1000)
})

it ('User is able to choose qualification and add Subjects to Package', () => {

    cy.get (QualificationUK).click()
    cy.get (Continue).click()
    cy.get (Chemistry).click()
    cy.get (Next).click()
    cy.get (Biology).click()
    cy.get (Next).click()
    cy.get (AddAditSubjects).click()
    cy.get (ComputerScience).click()
    cy.get (Next).click()
    cy.get (AddAditSubjects).click()
    cy.get (Physics).click()
    cy.get (Next).click()
    cy.get (ProceedtoNextStep).click()
    cy.wait (1000)

})

it ('User is able to choose qualification and add Subjects to Package for Student 2', () => {

    cy.contains ('Tell us about your second student').should('be.visible') //Student 2 adding
    cy.get (StudentFirstName).type ('Automation Student 2')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (StudentLastName).type ('Automation Student 2')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (StudentDateOfBirth).type ('2010-12-12') //Y7
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (CountryOfResidence2).click()
    cy.get (UK).click()
    cy.get (DesiredStartDate).click()
    cy.get (DesiredDate).click()
    cy.get (Continue).click()
    cy.wait(1000)
    cy.get (Continue).click()
    cy.wait(1000)
    cy.get (QualificationUK).click()
    cy.wait (1000)
    cy.get (Continue).click()
    cy.get (DramaSevenY).click()
    cy.get (STEMSevenY).click()
    cy.get (Next).click()
    cy.get (ProceedtoNextStep).click()
    cy.wait (1000)
    
})

it ('User is able to choose qualification and add Subjects to Package for Student 3', () => {

    cy.contains ('Tell us about your third student').should('be.visible') //Student 3 adding
    cy.get (StudentFirstName).type ('Automation Student 3')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (StudentLastName).type ('Automation Student 3')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (StudentDateOfBirth).type ('2006-12-12') //Y10
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (CountryOfResidence2).click()
    cy.get (UK).click()
    cy.get (DesiredStartDate).click()
    cy.get (DesiredDate).click()
    cy.get (Continue).click()
    cy.wait (1000)
    cy.get (Continue).click()
    cy.wait (2000)
    cy.get (QualificationUK).click()
    cy.get (Continue).click()
    cy.get (Chemistry).click()
    cy.get (Next).click()
    cy.get (Biology).click()
    cy.get (Next).click()
    cy.get (AddAditSubjects).click()
    cy.get (ComputerScience).click()
    cy.get (Next).click()
    cy.get (AddAditSubjects).click()
    cy.get (Physics).click()
    cy.get (Next).click()
    cy.get (ProceedtoNextStep).click()
})

it ('User is able to proceed to Confirmation page and adit Parent/Guardian info', () => {

    cy.contains('AQA Bogdan Test AQA Kalina').should('be.visible')
    cy.get (ParrentGuarEdit).click()
    cy.get (FirstName).clear()
    cy.get (FirstName).type ('AQA Bogdan Test Edit test')
    cy.get (LastName).clear()
    cy.get (LastName).type ('AQA Kalina edit test')
    cy.get (EmailAddress).clear()
    cy.get (EmailAddress).type ('bokal@ciklum.com')
    cy.get (Next).click()
    cy.get (ContactNumber).clear()
    cy.get (ContactNumber).type (123456789)
    cy.get (AddressLine1).clear()
    cy.get (AddressLine1).type ('12345 Automation Test')
    cy.get (PostalCode).clear()
    cy.get (PostalCode).type ('Qa123123Qa')
    cy.get (Continue).click()

})

it ('Button is disabled, when code isnt entered', () => {
    cy.get (openDiscountBlock).click()
    cy.wait (1000)
    cy.get (applyDiscountDisabled).should('be.disabled')
})

it ('User unable to apply NOT valid discount code', () => {
    cy.reload()
    cy.get (openDiscountBlock).click ()
    cy.wait (1000)
    cy.get (discountCodeTextField).type('123123Qa')
    cy.get (applyDiscountButton).click()
    cy.contains('The promotional code you entered is not valid').should('be.visible')
})

it ('User is able to apply dicount code', () => {

    cy.reload()
    cy.get (openDiscountBlock).click()
    cy.wait (1000)
    cy.get (discountCodeTextField).type('STARTSCHOOLOCT')
    cy.get (applyDiscountButton).click()
    cy.contains ('The promotional code is valid, discount applied').should('be.visible')
})

it ('User is able to remove applayed discount', () => {

    cy.reload()
    cy.get (applyDiscountButton).click()
})

it.skip ('User is able to Delete two Students, check info, and proceed to payment', () => {

    cy.get (TwoStudentDel).click() //to delete Student 2
    cy.get (StudentDelPopupYes).click()
    cy.contains ('Enrolment registration fee').should('be.visible')
    cy.contains ('Total to pay now').should('be.visible')
    cy.contains ('£50').should('be.visible')
    cy.reload()
    cy.wait(1000)
    cy.get (Terms).click()
    cy.get (Confirm).click()

})
})

describe.skip ('User is able to register a three Students and successfully proceed to payment floy', () => {
        
    it ('User is able to fill up all fields on Step1 and proceed to next Step2', () => {
    
        cy.visit (URL)
        cy.title().should('eq', 'InterHigh Registration')
        cy.contains ('Estimated time remaining:').should('be.visible')
        cy.get (FirstName).type ('AQA Bogdan Test')
        cy.get (LastName).type ('AQA Kalina')
        cy.get (EmailAddress).type ('bogdan.test.customer@gmail.com')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (relationshipType).click()
        cy.get(chooseMother).click()
        cy.get (Next).should('be.visible')
        cy.get (Next).click()
    
    })
    
    it ('User is able to to fill up further details and pass a timetable', () => {
        cy.wait (1000)
        cy.get (CountryOfResidence).click()
        cy.get (UK).click()
        cy.get (ContactNumber).type (1234567890)
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (AddressLine1).type ('2222 Automation Test 123')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (AddressLine2).type ('AQA123456')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (City).type ('London')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (PostalCode).type ('Qa12345')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (Continue).click()
        cy.wait (1000)
        cy.get (Continue).click()
        
    })
    
    it ('User is able to add Students and fill up Student Info and choose YG', () => {
    
        cy.get (PlusStudent).dblclick() //Doule click on add student button
        cy.get (Continue).click()
        cy.contains ('Tell us about your first student').should('be.visible') //Student 1 adding
        cy.get (StudentFirstName).type ('Automation Student 1')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (StudentLastName).type ('Automation Student 1')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (StudentDateOfBirth).type ('2006-12-12') //Y10
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (CountryOfResidence2).click()
        cy.get (UK).click()
        cy.get (DesiredStartDate).click()
        cy.get (newDateSep2023).click()
        cy.get (Continue).click()
        cy.wait (1000)
        cy.get (Continue).click()
        cy.wait (1000)
    })
    
    it ('User is able to choose qualification and add Subjects to Package', () => {
    
        cy.get (QualificationUK).click()
        cy.get (Continue).click()
    })
    
    it ('User is able to choose qualification and add Subjects to Package for Student 2', () => {
    
        cy.contains ('Tell us about your second student').should('be.visible') //Student 2 adding
        cy.get (StudentFirstName).type ('Automation Student 2')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (StudentLastName).type ('Automation Student 2')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (StudentDateOfBirth).type ('2010-12-12') //Y7
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (CountryOfResidence2).click()
        cy.get (UK).click()
        cy.get (DesiredStartDate).click()
        cy.get (Sep2023student2).click()
        cy.wait (1000)
        cy.get (Continue).click()
        cy.wait(1000)
        cy.get (Continue).click()
        cy.wait(1000)
        cy.get (QualificationUK).click()
        cy.wait (1000)
        cy.get (Continue).click()
        
    })
    
    it ('User is able to choose qualification and add Subjects to Package for Student 3', () => {
    
        cy.contains ('Tell us about your third student').should('be.visible') //Student 3 adding
        cy.get (StudentFirstName).type ('Automation Student 3')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (StudentLastName).type ('Automation Student 3')
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (StudentDateOfBirth).type ('2006-12-12') //Y10
        .should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get (CountryOfResidence2).click()
        cy.get (UK).click()
        cy.get (DesiredStartDate).click()
        cy.get (Sep2023student2).click()
        cy.get (Continue).click()
        cy.wait (1000)
        cy.get (Continue).click()
        cy.wait (2000)
        cy.get (QualificationUK).click()
        cy.get (Continue).click()
    })

    it ('User is able to proceed to Confirmation page and adit Parent/Guardian info', () => {

        cy.contains('AQA Bogdan Test AQA Kalina').should('be.visible')
        cy.get (ParrentGuarEdit).click()
        cy.get (FirstName).clear()
        cy.get (FirstName).type ('AQA Bogdan Test Edit test')
        cy.get (LastName).clear()
        cy.get (LastName).type ('AQA Kalina edit test')
        cy.get (EmailAddress).clear()
        cy.get (EmailAddress).type ('bokal@ciklum.com')
        cy.get (Next).click()
        cy.get (ContactNumber).clear()
        cy.get (ContactNumber).type (123456789)
        cy.get (AddressLine1).clear()
        cy.get (AddressLine1).type ('12345 Automation Test')
        cy.get (PostalCode).clear()
        cy.get (PostalCode).type ('Qa123123Qa')
        cy.get (Continue).click()
    
    })

    it ('Reload and saving data', () => {
        cy.reload()

    })

})
