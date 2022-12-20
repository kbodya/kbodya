import {Next} from "./../../integration/2-advanced-examples/selectors/RegistrationProcessEnd2End.json"
import {Checkbox} from "./../../integration/2-advanced-examples/selectors/RegistrationProcessEnd2End.json"
import {CountryOfResidence} from "./../../integration/2-advanced-examples/selectors/RegistrationProcessEnd2End.json"
import {UK} from "./../../integration/2-advanced-examples/selectors/RegistrationProcessEnd2End.json"
import {PlusStudent} from "./../../integration/2-advanced-examples/selectors/RegistrationProcessEnd2End.json"
import {StartDate} from "./../../integration/2-advanced-examples/selectors/RegistrationProcessEnd2End.json"
import {CountryOfResidence2} from "./../../integration/2-advanced-examples/selectors/RegistrationProcessEnd2End.json"



export class NavigationPage {

    FillUpFirstPage(){

        cy.contains('Estimated time remaining:').should('be.visible')
        cy.contains('Title').should('be.visible')
        cy.contains('First Name').should('be.visible')
        cy.contains('Last Name').should('be.visible')
        cy.contains('Email Address').should('be.visible')
    cy.get("input[id='firstName']").type('BogdanTestAutomation')
    .should('have.value','BogdanTestAutomation')
    cy.get('input[id="lastName"]').type('AQA')
    .should('have.value','AQA')
    cy.get('input[id="email"]').type('bogdantest@gmail.com')
    .should('have.value','bogdantest@gmail.com')
    cy.get('.styles_input__NV00d')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get(Checkbox).click()
    cy.get(Next).should('be.visible')
    .click()
    }

    FillUpSecondPage () {
        cy.contains('Estimated time remaining:').should('be.visible')
        cy.contains('Country of Residence').should('be.visible')
        cy.contains('Tell us more about the primary parent / guardian').should('be.visible')
        cy.contains('Contact Number').should('be.visible')
        cy.contains('Address Line 1').should('be.visible')
        cy.contains('Address Line 2').should('be.visible')
        cy.contains('City').should('be.visible')

    cy.get (CountryOfResidence).click()
    cy.get (UK).click()
    cy.get("input[id='telephoneNumber']").type('123123123')
    .should('have.value','123123123')
    cy.get("input[id='address.addressLine1']").type('Nizhnii Val 411')
    .should('have.value','Nizhnii Val 411')
    cy.get("input[id='address.addressLine2']").type('41')
    .should('have.value','41')
    cy.get("input[id='address.city']").type('Kyiv')
    .should('have.value','Kyiv')
    cy.get("input[id='address.postalCode']").type('04071')
    .should('have.value','04071') 
    cy.get('.styles_input__NV00d')
    .should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get (Next).click()

    }

    FillUpThirdPage(){
        cy.contains('Estimated time remaining:').should('be.visible')
        cy.contains('Thanks BogdanTestAutomation, let’s start with the basics.').should('be.visible')
        cy.contains('Confirm your timetable').should('be.visible')

    cy.get('#root > div > main > div > div > form > div.styles_cardHolder__4RN53.styles_inRow__SRfiI > div:nth-child(2) > svg > circle')
    .click()
    cy.get (Next).click()

    }

    FillUpFourthPage(){

        cy.contains('Estimated time remaining:').should('be.visible')
        cy.contains('How many students would you like to enrol?').should('be.visible')

    cy.get(PlusStudent).dblclick()
    cy.get (Next).click()
    }

    FillUpFivePage(){

        cy.contains('Estimated time remaining:').should('be.visible')
        cy.contains('Tell us about your first student').should('be.visible')
        cy.contains('First Name').should('be.visible')
        cy.contains('Last Name').should('be.visible')
        cy.contains('Date of Birth').should('be.visible')
        cy.contains('Desired Start Date').should('be.visible')

    cy.get("input[id='firstName']").type('AQATestStudent One')
    .should('have.value','AQATestStudent One')
    cy.get('input[id="lastName"]').type('AQAFirst Student LastName')
    .should('have.value','AQAFirst Student LastName')
    cy.get('#dateOfBirth').type('2006-12-12')
    .should('have.value','2006-12-12')
    cy.get (CountryOfResidence2).click()
    cy.get (UK).click()
    cy.get (Next).click()
    cy.wait(2000)
    cy.get (Next).click()
}

    FillUpSixPage(){

        cy.contains('Which qualification would you like to take?').should('be.visible')
        cy.contains('Choose your qualification').should('be.visible')
        cy.contains('GCSE').should('be.visible')
        cy.contains('GCSE - Homeschool, 3 subjects').should('be.visible')

    cy.get ('#root > div > main > div > div > form > div.styles_cardHolder__4RN53.styles_inRow__SRfiI > div:nth-child(2) > svg > circle').click()
    cy.get (Next).click()
    cy.wait (1000)
    cy.get (Next).click()
}

}

export const NavigateTo = new NavigationPage()