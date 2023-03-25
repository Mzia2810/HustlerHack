import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { changePermissionState } from '../store/storeSlices/appStateSlicer';

const data = [
  {
    title: `Terms & Conditions`,
    desc: `Hustler Fund Hack terms of Use and Loan Account Agreement – Kenya Terms and Conditions for the Opening and Use of a Loan Account with Hustler Fund Hack
    `,
  },
  {
    title: `WHEREAS`,
    desc: `This Agreement is a financial service and an end-user license agreement between you (“End-user” or “you”) and Hustler Fund Hack (“HFH”, “us” or “we”) for the mobile application software, the data supplied with the software and the associated Services (defined below) (“App”) This Agreement (together with our Privacy Policy) sets out the complete terms and conditions (the “Terms and Conditions”) which shall be applicable to the Account (as hereinafter defined) opened by you with HFH.These Terms and Conditions and any amendments or variations thereto take effect on their date of publication.
  `,
  },
  {
    title: `IT IS AGREED AS FOLLOWS:    DEFINITIONS AND INTERPRETATION
   `,
    desc: `For the purposes of this Agreement and the preamble above, unless the context requires otherwise: Acceptable Use Restrictions has the meaning given to it in clause 5; Agreement means this Agreement; Account means your loan account with HFH; Business Day means a day other than a Saturday, Sunday or national or public holiday in the Republic of Kenya; Credentials means your personal credentials used to access the App and operate your Account; Credit Reference Bureau means a credit reference bureau duly licensed under the Banking Act pursuant to the Banking (Credit Reference Bureau) Regulations, 2013, as amended, revised or promulgated from time to time, to inter alia, collect and facilitate the sharing of customer credit information; E-Money means the electronic monetary value depicted in your Mobile Money Account representing an equal amount of cash; Equipment includes your mobile phone handset, SIM Card and/or other equipment which when used together enables you to access the Network; Event of Default has the meaning given to it in clause 11.1; Force Majeure means events, circumstances or causes beyond its reasonable control of HFH making HFH’s performance of its obligations inadvisable, commercially impracticable, illegal, or impossible, including but not limited to acts of God, war, strikes or labour disputes, embargoes or government orders; Encumbrance includes any mortgage or charge (whether legal or equitable), lien, option, security interest, restrictive covenant, pledge, assignment, title retention, trust arrangement or other restriction of any kind or other encumbrance securing or any right conferring a priority of payment in respect of any obligation of any person; License Restrictions has the meaning given to it in clause 4; Loan means the principal amount of the loan made or to be made by HFH to you under this Agreement from time to time through the App or (as the context requires) the principal amount outstanding for the time being of that loan; Mobile Money Account means your mobile money store of value, being the record maintained by Mobile Money Providers in Kenya of the amount of E-Money from time to time held by you in the Mobile Money Provider’s System; Mobile Money means the money transfer and payments service operated by the Mobile Money Providers in Kenya; Mobile Network Operator means a mobile network operator in Kenya registered with the Communications Authority of Kenya;
    Mobile Money Provider means a Mobile Network Operator that has been duly authorized by the Central Bank of Kenya under applicable law to offer Mobile Money Services in Kenya; Mobile Money Service means the money transfer and payments service provided by the Mobile Money Providers through the Mobile Money System; Mobile Money System means the system operated by the Mobile Money Providers in Kenya for the provision of the Mobile Money Service; Network means a mobile cellular network operated by a Mobile Network Operator; Privacy Policy means the HFH privacy policy that sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us; Request means a request or instruction received by HFH from you or purportedly from you through the Network and the System and upon which HFH is authorized to act; Services shall include any form of financial services or products that HFH may offer you pursuant to this Agreement and as you may from time to time subscribe to and “Service” shall be construed accordingly; SIM Card means the subscriber identity module which when used with the appropriate mobile phone handset enables you to access the Network and to use the Mobile Money Account; SMS means a short message service consisting of a text message transmitted from your mobile phone to another; System means HFH electronic communications software enabling you to communicate with HFH for purposes of the Services. The System and the Services will for the purpose of this Agreement be accessed through a Mobile Network Operator’s System; Technology has the meaning given to it in clause 3.1.4; and Transaction and Application Fees includes any fees and charges payable for the use of the Services as published by HFH on HFH’s website or by such other means as HFH shall in its sole discretion determine. Transaction Fees are subject to change at any time at HFH’s sole discretion.   `,
  },
  {
    title: `Interpretation`,
    desc: ` In addition to the definitions in clause 1.1, unless the context requires otherwise: the singular shall include the plural and vice versa; a reference to any one gender, whether masculine, feminine or neuter, includes the other two. All the headings and sub-headings in this Agreement are for convenience only and are not to be taken into account for the purposes of interpretation of this Agreement. The recitals and schedules shall be deemed to form part of this Agreement. `,
  },
  {
    title: `ACCEPTANCE OF TERMS AND CONDITIONS `,
    desc: ` You must carefully read and understand the Terms and Conditions set out in this Agreement and as amended from time to time by HFH (the Terms and Conditions) before downloading or streaming the App or opening an account with HFH which will govern the use and operation of the App and the Account. After downloading the App, you will be deemed to accept the Terms and Conditions upon clicking the “Accept” option on HFHs System asking you to confirm that you have read, understood and agreed to abide by the Terms and Conditions. If you do not agree with the Terms and Conditions, please click the “Decline” option in HFH’s System. Please note that you will not be able to access the Services if you decline the Terms and Conditions. If you do not agree to the Terms and Conditions, we will not license the App to you. By downloading the App and opening an Account with HFH, you agree to comply with and be bound by the Terms and Conditions governing the operation of the Account, including but not limited to the payment of a non-refundable registration fee and you affirm that the Terms and Conditions herein are without prejudice to any other right that HFH may have with respect to the Account in law or otherwise. These Terms and Conditions may be amended or varied by HFH from time to time and the continued use of the Services constitutes your agreement to be bound by the terms of any such amendment or variation. HFH will take all reasonable measures to notify you of any changes. From time to time updates to the App may be issued through the website. Depending on the update, you may not be able to use the Services until you have downloaded or streamed the latest version of the App and accepted any new terms and conditions. By using the App or any of the Services, you consent to us collecting and using technical information about the Equipment and related software, hardware and peripherals for Services that are internet-based or wireless to improve our products and to provide any Services to you. If you use these Services, you consent to us and our affiliates’ and licensees’ transmission, collection, retention, maintenance, processing and use of your data to determine our credit scoring services or to improve our Services and/or your experience while using the App. `,
  },
  {
    title: ` GRANT AND SCOPE OF LICENCE `,
    desc: ` In consideration of you agreeing to abide by the terms of this Agreement, we grant you a non-transferable, non-exclusive license to use the App on your Equipment, subject to these Terms and Conditions. We reserve all other rights. Except as expressly set out in this Agreement or as permitted by any local law, you agree: not to rent, lease, sub-license, loan, translate, merge, adapt, vary or modify the App; not to make alterations to, or modifications of, the whole or any part of the App, or permit the App or any part of it to be combined with, or become incorporated in, any other programs; not to disassemble, decompile, reverse-engineer or create derivative works based on the whole or any part of the App or attempt to do any such thing except to the extent that such actions cannot be prohibited because they are essential for the purpose of achieving inter-operability of the App with another software program, and provided that: the information obtained by you during such activities is not unnecessarily disclosed or communicated without our prior written consent to any third party; and is not used to create any software that is substantially similar to the App; you include our copyright notice on all entire and partial copies you make of the App on any medium; not to provide or otherwise make available the App in whole or in part (including object and source code), in any form to any person without prior written consent from us; and to comply with all technology control or export laws and regulations that apply to the technology used or supported by the App or any Service (the Technology). `,
  },
  {
    title: `  TOGETHER LICENCE RESTRICTIONS`,
    desc: ` You must:
    not use the App or any Service in any unlawful manner, for any unlawful purpose, or in any manner inconsistent with this Agreement, or act fraudulently or maliciously, for example, by hacking into or inserting malicious code, including viruses, or harmful data, into the App, any Service or any operating system; not infringe our intellectual property rights or those of any third party in relation to your use of the App or any Service, including the submission of any material (to the extent that such use is not licensed by this Agreement); not transmit any material that is defamatory, offensive or otherwise objectionable in relation to your use of the App or any Service not use the App or any Service in a way that could damage, disable, overburden, impair or compromise our systems or security or interfere with other users; and not collect or harvest any information or data from any Service or our systems or attempt to decipher any transmissions to or from the servers running any Service. `,
  },
  {
    title: `  TOGETHER ACCEPTABLE USE RESTRICTIONS `,
    desc: ` INTELLECTUAL PROPERTY RIGHTS 
    You acknowledge that all intellectual property rights in the App and the Technology anywhere in the world belong to us or our licensors, that rights in the App are licensed (not sold) to you, and that you have no rights in, or to, the App or the Technology other than the right to use each of them in accordance with the terms of this Agreement. You acknowledge that you have no right to have access to the App in source-code form. USE OF THE SERVICES The Services offered by HFH can only be utilized by persons over the age of 18.HFH reserves the right to verify the authenticity and status of your Mobile Money Account with the relevant Mobile Money Provider. HFH’s acceptance of your application for an Account will be displayed on the App. You hereby acknowledge and accept that the acceptance by HFH of your application for an Account does not create any contractual relationship between you and the Mobile Money Providers beyond the terms and conditions that apply to your Mobile Money Account from time to time. HFH reserves the right to decline your application for a loan or to revoke the same at any stage at HFH’s sole and absolute discretion and without assigning any reason or giving any notice thereto. HFH reserves the right (in its sole and absolute discretion) to issue, decline to issue a loan and/or vary the terms of any loan depending on its assessment of the credit profile of each individual borrower from time to time. The terms of the loan and the interest rate payable in relation to each loan application will be displayed on the App. 
    PERSONAL INFORMATION 
    You hereby agree and authorize HFH to verify information provided by you to HFH against the information held by the Mobile Money Providers in relation to your Mobile Money Account pursuant to the agreement between you and the relevant Mobile Money Provider for the provision of its products and services and the Mobile Money Service.
    The information that HFH may verify against the information held by the Mobile Money Providers includes (without limitation): your phone number, name, date of birth, Identification Number (“ID”) or Passport Number and such other information that will enable HFH to identify you and comply with the regulatory “Know Your Customer” requirements (together the “Personal Information”).
    You hereby agree and authorize HFH to verify information including, but not limited to, data relating to your phone (including, without limitation, your phone’s history) from your Equipment, from any SMS sent to you by the Mobile Money Providers and any financial services providers relating to your use of the Mobile Money Service and such other information as HFH shall require for purposes of providing you the Services (the “Relevant Information”).
    You hereby consent to HFH verifying the Personal Information and the Relevant Information with the Mobile Money Providers and using of the Personal Information and the Relevant Information to the extent necessary in the opinion of HFH.
    You hereby agree and authorize HFH to obtain and procure your Personal Information and Relevant Information from your respective Mobile Money Provider and you further agree and consent to the disclosure and provision of such Personal Information by the Mobile Money Provider and further to indemnify and hold HFH and the Mobile Money Provider harmless with respect to any claims, losses, liabilities and expenses (including legal fees and expenses) that may arise as a result of the disclosure and reliance on such Personal Information and/or Relevant Information.
    You hereby agree and authorize HFH to obtain and procure your Personal Information from the Credit Reference Bureaus and you further agree and consent to the disclosure and provision of such Personal Information by the Credit Reference Bureaus.
    HFH reserves the right to request for further information from you pertaining to your application for an Account at any time. Failure to provide such information within the time required by HFH may result in HFH declining to accept your application for an Account.
    HFH reserves the right to supply consumer credit information to the Credit Reference Bureaus, and in this regard: you confirm that HFH may transmit to the Credit Reference Bureaus data about the App, opening and termination of an Account by you;
    you acknowledge that information on non-compliance with the Terms and Conditions of this Agreement is transferred to the Credit Reference Bureaus; and
    the Credit Reference Bureaus provide a credit profile and possibly credit scores on your creditworthiness, subject to the credit record.
     `,
  },
  {
    title: ` REQUESTS MADE BY THE BORROWER `,
    desc: `You hereby irrevocably authorize HFH to act on all Requests received by HFH from you (or purportedly from you) through the System and to hold you liable in respect thereof. HFH may nevertheless refuse to carry out any Requests in its sole and absolute discretion.
    Subject to its discretion, HFH reserves the right to reject any Request in relation to a loan application from you even if you have previously been issued with a loan by HFH.
    HFH shall be entitled to accept and to act upon any Request, even if that Request is otherwise for any reason incomplete or ambiguous if, in its absolute discretion, HFH believes that it can correct the incomplete or ambiguous information in the Request without any reference to you being necessary.
    HFH shall be deemed to have acted properly and to have fully performed all the obligations owed to you notwithstanding that the Request may have been initiated, sent or otherwise communicated in error or fraudulently, and you shall be bound by any Requests on which HFH may act if HFH has in good faith acted in the belief that such instructions have been sent by you.
    HFH may, in its absolute discretion, decline to act on or in accordance with the whole or any part of your Request pending further enquiry or further confirmation (whether written or otherwise) from you.
    You agree to and shall release from and indemnify HFH against all claims, losses, damages, costs and expenses howsoever arising in consequence of, or in any way related to HFH having acted in accordance with the whole or any part of any of your Requests (or failed to exercise) the discretion conferred upon it.
    You acknowledge that to the full extent permitted by law HFH shall not be liable for any unauthorized drawing, transfer, remittance, disclosure, any activity or any incident on your account by the fact of the knowledge and/or use or manipulation of your Account HFH, password, ID or any means whether or not occasioned by your negligence.
    HFH is authorized to effect such orders in respect of your Account as may be required by any court order or competent authority or agency under the applicable laws.
    In the event of any conflict between any terms of any Request received by HFH from you and this Agreement, this Agreement shall prevail.
     `,
  },
  {
    title: ` INTEREST AND FEES`,
    desc: `The interest payable by you to HFH in relation any Loan shall be displayed by HFH on the App. HFH shall be entitled to set and charge Transaction Fees, in connection with your use of the Services and from time to time amend or vary its Transaction Fees for the Services. If HFH decides to start charging Transaction Fees or where already applicable, vary or amend its Transaction Fees, the Transaction Fees payable on any new application for Services will be displayed on the App. HFH will use reasonable endeavors to try notify you of any changes in relation to Transaction Fees within a reasonable period before such changes are implemented including displaying notices of the changes on the App or HFH website.
    All payments to be made by you under this Agreement shall be made in full without any set off or counterclaim and save in so far as required by the law to the contrary, free and clear of and without any deduction or withholding whatsoever. If you are at any time required to make any deduction or withholding from any payment to HFH you shall immediately pay to HFH such additional amounts as will result in HFH receiving the full amount it would have received had no such deduction or withholding been required.
    If you fail to make any payments due to HFH at the due date for payment, HFH will be authorized to apply late fees on such amount loaned to you at a rate to be communicated to you.
     `,
  },
  {
    title: `STATEMENTS `,
    desc: `A statement and activity report in respect of your Account will be made available on request. Requests shall be made via a contact link on the App.
    The statement on the App shall provide details of the last 4 (four) transactions (or such other number of transactions as determined by HFH) in your Account initiated from your Equipment.
    Your statement will show all amounts added or taken from your account. You must check your statement carefully and notify HFH as soon as possible if it includes any transaction or other entry which appears to you to be wrong or not made in accordance with your instructions.
    HFH reserves the right to rectify discrepancies, add and/or alter the entries in your statements, without prior notice to you. HFH will however inform you of any rectification, additions and or alterations effected on your statements within a reasonable time after the changes are effected.
    You will be notified of all transactions on your Account by way of SMS and the charges for this service will be debited to your Account.
    Save for a manifest error, a statement issued to you in respect of your Branch Account shall be conclusive evidence of the transactions carried out on your Branch Account for the period covered in the statement.
     `,
  },
  {
    title: `TAXES `,
    desc: `All payments to be made by you in connection with these Terms and Conditions are calculated without regard to any taxes payable by you. If any taxes are payable in connection with the payment, you must pay HFH an additional amount equal to the payment multiplied by the appropriate rate of tax. You must do so at the same time as making the payment.
    You hereby consent and agree that HFH may withhold amounts in your Account if any tax authority requires BIL to do so, or HFH is otherwise required by law or pursuant to agreements with any tax authority to do so, or if HFH needs to comply with internal policies or with any applicable order or sanction of a tax authority.
     `,
  },
  {
    title: `BORROWER’S RESPONSIBILITIES `,
    desc: `You shall at your own expense provide and maintain in safe and efficient operating order your Equipment necessary for the purpose of accessing the System and the Services.
    You shall be responsible for ensuring the proper performance of your Equipment. HFH shall neither be responsible for any errors or failures caused by any malfunction of your Equipment and nor shall HFH be responsible for any computer virus or related problems that may be associated with the use of the System, the Services and the Equipment. You shall be responsible for charges due to any service provider providing you with connection to the Network and HFH shall not be responsible for losses or delays caused by any such service provider.
    You shall follow all instructions, procedures and terms contained in this Agreement and any document provided by HFH concerning the use of the System and the Services.
    You hereby agree and acknowledge that you shall be solely responsible for the safekeeping and proper use of your Equipment and for keeping your Credentials secret and secure. You shall ensure that your Credentials do not become known or come into possession of any unauthorized person. HFH hall not be liable for any disclosure of your Credentials to any third party and you hereby agree to indemnify and hold HFH harmless from any losses resulting from any disclosure of your Credentials.
    You shall take all reasonable precautions to detect any unauthorized use of the System and the Services. To that end, you shall ensure that all communications from HFH are examined and checked by you or on your behalf as soon as practicable after receipt by you in such a way that any unauthorized use of and access to the System will be detected. You shall immediately inform HFH in the event that:
    You have reason to believe that your Credentials are or may be known to any person not authorized to know the same and/or have been compromised; and/or
    You have reason to believe that unauthorized use of the Services has or may have occurred or could occur and a transaction may have been fraudulently input or compromised.
    You shall at all times follow the security procedures notified to you by HFH from time to time or such other procedures as may be applicable to the Services from time to time. You acknowledge that any failure on your part to follow the recommended security procedures may result in a breach of your Account’s confidentiality. In particular, you shall ensure that the Services are not used or Requests are not issued or the relevant functions are not performed by anyone other than a person authorized to do so.
    You shall not at any time operate or use the Services in any manner that may be prejudicial to HFH.
     `,
  },
  {
    title: `DEFAULT ON LOAN`,
    desc: `An event of default (Event of Default) occurs when you:
    fail to pay any sum payable for a Loan granted under these Terms and Conditions for a period of ninety (90) consecutive days unless failure to pay is caused solely by an administrative error or technical problem; or are declared bankrupt.
    At any time after an Event of Default has occurred which is continuing, HFH may, without prejudice to any other right or remedy granted to it under any law:
    terminate this Agreement in accordance with clause 12 below;
    declare that the Loan (and all accrued interest and all other amounts outstanding under this Agreement is immediately due and payable, whereupon they shall become immediately due and payable; and
    supply information concerning the Event of Default to Credit Reference Bureaus. A copy of any adverse information concerning you sent to a Credit Reference Bureau shall be made available to you upon written request.
     `,
  },
  {
    title: `VARIATION AND TERMINATION`,
    desc: `BIL may at any time, upon notice to you, terminate or vary its business relationship with you and close your Account and in particular but without prejudice to the generality of the foregoing BIL may cancel credits which it has granted and require the repayment of outstanding debts resulting from such credits within such time as HFH may determine.
    Without prejudice to HFH’s rights under clause 14.1, HFH may at its sole discretion suspend or close your Account:
    if you use the Account for unauthorized purposes or where HFH detects any abuse/misuse, breach of content, fraud or attempted fraud relating to your use of the Services;
    if your Account or agreement with a Mobile Network Operator is terminated for whatever reason;
    if HFH is required or requested to comply with an order or instruction of or a recommendation from the government, court, regulator or other competent authority;
    if HFH reasonably suspects or believes that you are in breach of these Terms and Conditions (including non-payment of any Loan amount due from you where applicable) which you fail to remedy (if remediable) within 14 days after the service of notice by email, SMS or other electronic means requiring you to do so;
    where such a suspension or variation is necessary as a consequence of technical problems or for reasons of safety; to facilitate update or upgrade the contents or functionality of the Services from time to time; where your Account becomes inactive or dormant;
    if HFH decides to suspend or cease the provision of the Services for commercial reasons or for any other reason as it may determine in its absolute discretion; or
    if you breach any of the License Restrictions or the Acceptable Use Restrictions.
    If your account has a credit balance at any time as a result of overpayment of your Loan, you may issue a Request to HFH for payment of such credit balance and HFH will return any such balance to you, less any applicable fees, provided that such amount falls above the minimum transfer amounts specified by the relevant Mobile Money Provider.
    Termination shall however not affect any accrued rights and liabilities of either party.
    If HFH receives notice of your demise, HFH will not be obliged to allow any operation or withdrawal from your Account by any person except upon production of administration letters from a competent authority or confirmed grant of letters of administration or confirmed grant of probate by your legal representatives duly appointed by a court of competent jurisdiction.
     `,
  },
  {
    title: ` EXCLUSION OF LIABILITY`,
    desc: `HFH shall not be responsible for any loss suffered by you should the Services be interfered with or be unavailable by reason of the failure of any of your Equipment, or any other circumstances whatsoever not within HFH’s control including, without limitation, Force Majeure or error, interruption, delay or non- availability of the System, terrorist or any enemy action equipment failure, loss of power, adverse weather or atmospheric conditions, and failure of any public or private telecommunications system.
You acknowledge that the App has not been developed to meet your individual requirements and that it is therefore your responsibility to ensure that the facilities and functions of the App as described meet your requirements.
We only supply the App for domestic and private use. You agree not to use the App and Documents for any commercial, business or resale purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.
HFH will not be liable for any losses or damage suffered by you as a result of or in connection with:
any defect or fault in the App or any Service resulting from you having altered or modified the App;
any defect or fault in the App resulting from you having used the App in breach of the terms of this Agreement;
your breach of any of the License Restrictions or the Acceptable Use Restrictions;
unavailability of sufficient funds in your Mobile Money Account;
failure, malfunction, interruption or unavailability of the System, your Equipment, the Network or a Mobile Money System; the money in your account being subject to legal process or other encumbrance restricting payments or transfers thereof; your failure to give proper or complete instructions for payments or transfers relating to your Account;
any fraudulent or illegal use of the Services, the System and/or your Equipment; or
your failure to comply with these Terms and Conditions and any document or information provided by HFH concerning the use of the System and the Services.
If for any reason other than a reason mentioned in clauses 13.1 to 13.4, the Services are interfered with or unavailable, HFH’s sole liability under this Agreement in respect thereof shall be to re-establish the Services as soon as reasonably practicable.
Save as provided in clause 13.5, HFH shall not be liable to you for any interference with or unavailability of the Services, howsoever caused.
Under no circumstances shall HFH be liable to you for any loss of profit or anticipated savings or for any indirect or consequential loss or damage of whatever kind, howsoever caused, arising out of or in connection with the Services even where the possibility of such loss or damage is notified to HFH.
All warranties and obligations implied by law are hereby excluded to the fullest extent permitted by law.
`,
  },
  {
    title: `INDEMNITY `,
    desc: `In consideration of HFH complying with your instructions or Requests in relation to your Account, you undertake to indemnify HFH and hold it harmless against any loss, charge, damage, expense, fee or claim which BIL suffers or incurs or sustains thereby and you absolve HFH from all liability for loss or damage which you may sustain from HFH acting on your instructions or requests or in accordance with these Terms and Conditions.
    The indemnity in clause 14.1 shall also cover the following:
    All demands, claims, actions, losses, and damages of whatever nature which may be brought against HFH or which it may suffer or incur arising from its acting or not acting on any Request or arising from the malfunction or failure or unavailability of any hardware, software, or equipment, the loss or destruction of any data, power failures, corruption of storage media, natural phenomena, riots, acts of vandalism, sabotage, terrorism, any other event beyond HFH’s control, interruption or distortion of communication links or arising from reliance on any person or any incorrect, illegible, incomplete or inaccurate information or data contained in any Request received by HFH.
    Any loss or damage that may arise from your use, misuse, abuse or possession of any third party software, including without limitation, any operating system, browser software or any other software packages or programs.
    Any unauthorised access to your Account or any breach of security or any destruction or accessing of your data or any destruction or theft of or damage to any of your Equipment.
    Any loss or damage occasioned by the failure by you to adhere to these Terms and Conditions and/or by supplying of incorrect information or loss or damage occasioned by the failure or unavailability of third party facilities or systems or the inability of a third party to process a transaction or any loss which may be incurred by HFH as a consequence of any breach by these Terms and Conditions.
    Any damages and costs payable to HFH in respect of any claims against HFH for recompense for loss where the particular circumstance is within your control.
    `,
  },
  {
    title: `COMMUNICATION BETWEEN US `,
    desc: `If you wish to contact us in writing, or if any condition in these Terms and Conditions requires you to give us notice, you can send this to us by e-mail to a support e-mail address that may be communicated to you from time to time. We will confirm receipt of this by contacting you in writing by e-mail.
    If we have to contact you or give you notice in writing, we will do so by e-mail or by sms to the mobile phone number or email address you provide to us in your request for the App.
   `,
  },
  {
    title: `GENERAL`,
    desc: `Remedies Cumulative
    No failure on the part of any party to exercise, or delay on its part in exercising, any right, power or remedy provided by this Agreement or by law shall operate as a waiver thereof, nor shall any single or partial exercise of any such right, power or remedy preclude any further or other exercise of that, or any other, right, power or remedy.
     No waiver
    No failure by HFH to exercise and no delay in exercising, any right or remedy in respect of any provision of this Agreement shall operate as a waiver of such right or remedy.
    Effect of invalidity
    If any provision or part of a provision of this Agreement shall be, or be found by any court of competent jurisdiction to be, invalid or unenforceable, such invalidity or unenforceability shall not affect the other provisions or parts of such provisions of this Agreement, all of which shall remain in full force and effect.
    `,
  },
  {
    title: `ENTIRE AGREEMENT`,
    desc: `These Terms and Conditions and our Privacy Policy constitute the entire agreement between you and us and supersede and extinguish all previous agreements, promises, assurances, warranties, representations and understandings between us, whether written or oral, relating to its subject matter.
    You acknowledge that in entering into this Agreement you do not rely on any statement, representation, assurance or warranty (whether made innocently or negligently) that is not set out in these Terms and Conditions or our Privacy Policy.
    You and we agree that neither of us shall have any claim for innocent or negligent misrepresentation or negligent misstatement based on any statement in this Agreement.
     `,
  },
  {
    title: `DISPUTE RESOLUTION`,
    desc: `Disputes
    The Parties shall use their good faith efforts to resolve any dispute, controversy or claim of any nature whatsoever arising out of or in relation to or in connection with this Agreement. To this end, the Parties in dispute shall each promptly appoint representatives of appropriate standing who shall meet and attempt to resolve any dispute between them. In the event that an amicable settlement has not been reached within thirty (30) days of the parties’ representatives meeting as aforesaid, the following provisions of this clause 20 shall apply.
    Arbitration
    Any dispute, difference or question whatsoever and howsoever arising out of or in connection with this Agreement, save as specifically provided herein, shall be referred for final determination to a single arbitrator to be appointed by agreement between the parties hereto or in default of any such agreement within seven (7) days of the notification of any dispute by either party to the other then, upon application by either party, by the Chairman for the time being of the Kenya Branch of the Chartered Institute of Arbitrators (“Institute”).
    Such arbitration shall take place in Nairobi and shall be conducted in accordance with the Rules of Arbitration of the Institute.
    To the extent permissible by law the determination of the arbitrator shall be final and binding upon the Parties and shall not be subject to any appeal.
    Nothing in this clause 20.2 shall restrict either Party’s freedom to commence legal proceedings of any nature for the purposes of seeking preliminary injunctive relief or interim or conservatory measures from any court of competent jurisdiction pending the final decision or award of any arbitrator.
     `,
  },
  {
    title: ` GOVERNING LAW `,
    desc: `This Agreement shall be governed by and construed in accordance with the laws of Kenya. `,
  },
  {
    title: ` HFH’s PRIVACY POLICY`,
    desc: `We only use your personal information in accordance with our Privacy Policy. Please take the time to read our Privacy Policy, as it includes important terms which apply to you.
    Upon downloading the App and clicking the “Accept” option with respect to these Terms and Conditions, you will be deemed to have accepted HFH’s Privacy Policy, a copy of which is available on the App.
    
     `,
  },
];

const renderItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={{ textAlign: 'justify' }}>{item.desc}</Text>
    </View>
  );
};

const Premission = ({navigation}) => {
  const [visible, setVisible] = useState(false);
 
  const dispatch = useDispatch()


  const OnDisAgree = () => {
    dispatch(changePermissionState(false))
    navigation.navigate('Privacy')
  }
  const onCofirm = () => {
    setVisible(false)
    dispatch(changePermissionState(true))
    navigation.navigate('Privacy')
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: wp('40%'), alignSelf: 'center', marginTop: 10 }}>
        <Image source={require('../assets/PLogo.png')} />
        <Text style={styles.Premission}>Permissions Disclosure</Text>
      </View>
      <View style={{ width: wp('90%'), height: hp('76%'), alignSelf: 'center' }}>
        <FlatList
          style
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.bntParent}>
        <TouchableOpacity onPress={OnDisAgree} style={styles.btn1}>
          <Text style={styles.btntext}>I Disagree</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVisible(true)} style={styles.btn2}>
          <Text style={[styles.btntext, {color: 'white'}]}>I Agree</Text>
        </TouchableOpacity>

        <Modal
          transparent
          visible={visible}
          onRequestClose={() => setVisible(false)}>
          <TouchableOpacity style={{flex: 1}} onPress={() => setVisible(false)}>
            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1}} />
          </TouchableOpacity>
          <View style={styles.modalView}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                lineHeight: 18,
                color: 'black',
              }}>
              Notice
            </Text>
            <View>
              <Text style={{textAlign:'center',marginTop:20}}>
                In order to evaluate your qualifications and provide you with
                better services, we need your authorization to collect your
                relevant information. Please confirm whether to deny the
                permission and understand that this operation will exit the APP,
                or cancel the operation?{' '}
              </Text>
            </View>

            <View style={styles.bntParentModal}>
              <TouchableOpacity
              onPress={() =>setVisible(false)}
              style={styles.btn1Modal}>
                <Text style={styles.btntext}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onCofirm}
                style={styles.btn2Modal}>
                <Text style={[styles.btntext, {color: 'white'}]}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Premission;

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#fff',
    padding: 20,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: wp('80%'),
    marginTop: hp('20%'),
    borderRadius:10,
  },
  Premission: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 17,
    marginVertical: 20,
    width: '100%',
  },
  bntParent: {
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bntParentModal: {
    width: wp('70%'),
    alignSelf: 'center',
    marginTop: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    marginVertical: hp('1%'),
    textAlign: 'justify',
  },
  btn1: {
    borderWidth: 2,
    borderColor: '#5ECE7D',
    // paddingHorizontal: 18,
    // paddingVertical: 6,
    width: wp('40%'),
    height: hp('5%'),
    borderRadius: 8,
    justifyContent: 'center',
  },
  btn1Modal: {
    borderWidth: 2,
    borderColor: '#5ECE7D',
    // paddingHorizontal: 18,
    // paddingVertical: 6,
    width: wp('30%'),
    height: hp('5%'),
    borderRadius: 8,
    justifyContent: 'center',
  },
  btn2: {
    width: wp('40%'),
    height: hp('5%'),
    borderWidth: 2,
    borderColor: '#5ECE7D',
    backgroundColor: '#5ECE7D',
    // paddingHorizontal: 18,
    // paddingVertical: 6,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btn2Modal: {
    width: wp('30%'),
    height: hp('5%'),
    borderWidth: 2,
    borderColor: '#5ECE7D',
    backgroundColor: '#5ECE7D',
    // paddingHorizontal: 18,
    // paddingVertical: 6,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btntext: {
    color: '#55D378',
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 24,
    textAlign: 'center',
  },
});
