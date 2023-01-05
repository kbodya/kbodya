import {Next} from "../RegistrationProcessEnd2End.json"
import {Checkbox} from "../RegistrationProcessEnd2End.json"
import {CountryOfResidence} from "../RegistrationProcessEnd2End.json"
import {UK} from "../RegistrationProcessEnd2End.json"
import {PlusStudent} from "../RegistrationProcessEnd2End.json"
import {StartDate} from "../RegistrationProcessEnd2End.json"
import {CountryOfResidence2} from "../RegistrationProcessEnd2End.json"
import {relationshipType} from "../RegistrationProcessEnd2End"
import {chooseMother} from "../RegistrationProcessEnd2End"
import {DesiredDate} from "../RegistrationProcessEnd2End"
import {DesiredStartDate} from "../RegistrationProcessEnd2End"


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
    cy.get (relationshipType).click()
    cy.get(chooseMother).click()
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
    cy.get (DesiredStartDate).click()
    cy.get (DesiredDate).click()
    cy.get (Next).click()
    cy.wait(2000)
    cy.get (Next).click()
}

    FillUpQualificationPage() {

        cy.contains('Which qualification would you like to take?').should('be.visible')
        cy.contains('Choose your qualification').should('be.visible')
        cy.contains('GCSE').should('be.visible')
        cy.contains('GCSE - Homeschool, 3 subjects').should('be.visible')

    cy.get ('#root > div > main > div > div > form > div.styles_cardHolder__4RN53.styles_inRow__SRfiI > div:nth-child(1) > svg > circle').click()
    cy.get (Next).click()
    cy.wait (1000)
}

    FillUpSubjectsPage() {
        cy.contains ('Subject Selector - Stage 1 of 2').should('be.visible')
        cy.get ('#subjects > div:nth-child(2) > div > div:nth-child(1) > svg > circle').click()
        cy.get (Next).click()

    }

    fillUpNextSubjectPage(){
        cy.contains ('Subject Selector - Stage 2 of 2').should('be.visible')
        cy.get ('#additional-subjects > div > div > div:nth-child(1) > svg > circle').click()
        cy.get (Next).click()
        cy.contains ('Add/edit more subjects').click()
        cy.get (Next).click()
        cy.contains ('Proceed to next step').click()
    
        
    }

    fillUpNextStudent(){
        cy.contains ('Tell us about your second student').should('be.visible')
        cy.get("input[id='firstName']").type('AQATestStudent Two')
    .should('have.value','AQATestStudent Two')
    cy.get('input[id="lastName"]').type('AQATwo Student LastName')
    .should('have.value','AQATwo Student LastName')
    cy.get('#dateOfBirth').type('2005-12-12')
    .should('have.value','2005-12-12')
    cy.get (CountryOfResidence2).click()
    cy.get (UK).click()
    cy.get (DesiredStartDate).click()
    cy.get (DesiredDate).click()
    cy.get (Next).click()
    cy.wait(2000)
    cy.get (Next).click()
    cy.contains ('IB Diploma').click()
    cy.contains ('Change to UK timetable').click()
    cy.get (DesiredStartDate).click()
    cy.get (DesiredDate).click()
    cy.get (Next).click()
    cy.wait (1000)
    cy.get (Next).click()
    cy.contains ('GCSE - Core Package').click()
    cy.get (Next).click()
    cy.contains ('Subject Selector - Stage 1 of 2').should('be.visible')
    cy.get ('#subjects > div:nth-child(2) > div > div:nth-child(1) > svg > circle').click()
    cy.get (Next).click()
    cy.contains ('Subject Selector - Stage 2 of 2').should('be.visible')
        cy.contains ('Chemistry').click()
        cy.get (Next).click()
        cy.contains ('Add/edit more subjects').click()
        cy.get (Next).click()
        cy.contains ('Proceed to next step').click()
        cy.get (DesiredStartDate).click({ multiple: true })
    cy.get (Next).click()
    cy.wait (1000)
    cy.get (Next).click()
    cy.contains ('IB Diploma').click()
    cy.get (Next).click()
    cy.contains ('Studies in Language and Literature*').should ('be.visible')
    cy.contains ('English Language and Literature').click()
    cy.contains ('Language Acquisition').should ('be.visible')
    cy.contains ('French B').click()
    cy.contains ('Individuals and Societies').should ('be.visible')
    cy.contains ('History').click()
    cy.contains ('Sciences*').should ('be.visible')
    cy.contains ('Biology').click()
    cy.contains ('Mathematics*').should ('be.visible')
    cy.contains ('Maths: Analysis and Approaches').click()
    cy.get (Next).click()
    cy.contains ('Choose options below').should ('be.visible')
    cy.contains ('Chemistry').click()
    cy.get (Next).click()
    cy.contains ('Higher').click()
    cy.get (Next).click()
    cy.contains ('Delete student').click()
    cy.wait (1000)
    cy.get ('footer > button:nth-child(2)').click() //Confirm to Delete Student and redirect to Confirmation page
    }
}

export const NavigateTo = new NavigationPage()