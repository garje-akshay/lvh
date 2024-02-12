/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";
import { useState } from "react";
import { Card, Modal } from "@mui/material";

function SimpleFooter({ company, links, light }) {
  const { href, name } = company;
  const { size } = typography;

  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  const renderLinks = () =>
    links.map((link, key) => (
      <MKBox
        key={link.name}
        component="li"
        pl={key === 0 ? 0 : 2}
        pr={key === links.length - 1 ? 0 : 2}
        lineHeight={1}
      >
        <Link href={link.href} target="_blank">
          <MKTypography variant="button" fontWeight="regular" color={light ? "white" : "text"}>
            {link.name}
          </MKTypography>
        </Link>
      </MKBox>
    ));

  return (
    <Container>
      {/* <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
          <Card sx={{ maxWidth:"50%", maxHeight:"70%",overflow:"auto"}}>{`Data protection
Privacy policy for provider identification acc. GDPR (DS-GVO) from 25.05.2018

Privacy Policy
Data protection plays the role as one of the key importance's for the management of LVH Products GmBH The use of the web pages of the LVH Products GmBH is possible in principle without any indication of personal data. However, if a data subject wishes to use our company's special services through our website, personal data processing may be required. And for that there is no legal basis for such processing, we generally seek the consent of the data subject.

We are pleased about your interest in our company. The processing of personal data, such as the name, address, e-mail address or telephone number of a subject, is always in accordance with the General Data Protection Regulation and in accordance with the country-specific data protection provisions applicable to LVH Products GmBH Through this privacy policy, our company seeks to inform the public about the nature, scope and purpose of the personal information we collect, use and process. Furthermore, data subjects are informed of their rights under this privacy policy.

LVH Products GmBH, as the controller, has implemented numerous technical and organizational measures to ensure the most complete protection possible for personal data processed via this website. Nevertheless, Internet-based data transmissions can generally have security holes, so that absolute protection can not be guaranteed. For this reason, every person concerned is free to submit personal data to us in alternative ways, for example by telephone.

1. Definitions
The privacy policy of LVH Products GmBH is based on the terminology used by the European directive and regulatory authority in the adoption of the General Data Protection Regulation (GDPR). Our privacy policy should be easy to read and understand for the public as well as for our customers and business partners. To ensure this, we would like to explain in advance the terminology used.

2. Name and address of the controller / group association. The person responsible for the General Data Protection Regulation, other data protection laws in the member states of the European Union and other provisions with data protection character is:
LVH Products GmBH
Schoener 42 9,
8243VW, Lelystad,
The Netherlands.
Tel.:+31-(0)643190947
E-Mail: info@graphinnovat.com
Website: www.graphinnovat.com
Any data subject can contact our data protection officer at any time with any questions and suggestions regarding data protection.

3. Cookies,
The websites of LVH Products GmBH use cookies. Cookies are text files that are stored on a system via an Internet Connection. websites and servers use cookies contains a cookie ID. Treated as a unique identifier of a cookie. It consists of a string through which Internet pages and servers can be assigned to the specific Internet browser in which the cookie was stored. This allows visited websites and servers to distinguish the individual's browser from other internet browsers that contain other cookies. A particular web browser can be recognized and identified by the unique cookie ID.

Through the use of cookies, LVH Products GmBH can provide users of this website with more user-friendly services that would not be possible without the cookie setting.

By means of a cookie the information and offers on our website can be optimized in user oriented way. Cookies allow us, as already mentioned, to recognize the users of our website. The purpose of this recognition is to make it easier for users to use our website. For example, the user of a website using cookies does not need to re-enter his credentials each time he or she visits the website, because this is done by the website and the cookies are stored on the user's system. Another example is the cookie of a shopping basket in the online shop. The online shop remembers the items that a customer has placed in the virtual shopping cart via a cookie. The data subject can prevent the setting of cookies through our website at any time by means of a corresponding setting of the Internet browser used and thus permanently contradict the setting of cookies. Furthermore, already set cookies can be deleted at any time via an internet browser or other software programs. This is possible in all common internet browsers. If the data subject deactivates the setting of cookies in the Internet browser used, not all functions of our website may be fully usable.

Collecting general data and information
The LVH Products GmBH website collects a series of general data and information each time the website is accessed by an affected person or an automated system. This general data and information is stored in the log files of the server.

(1) Browser types and versions used,
(2) The operating system used by the accessing system,
(3) The website from which an accessing system accesses our website (so-called referrers),
(4) The sub-web pages, which can be accessed via
(5) The date and time of access to the website,
(6) An Internet Protocol address (IP address),
(7) The Internet service provider of the accessing system and
(8) Other similar data and information,

When using this general data and information, LVH Products GmBH does not draw conclusions about the data subject. Rather, this information is required to

(1) Correctly deliver the contents of our website,
(2) To optimize the content of our website and to advertise it,
(3) To ensure the continued functioning of our information technology systems and the technology of our website, and
(4) To provide law enforcement authorities with the necessary information for prosecution in the event of a cyber-attack. This anonymously collected data and information are evaluated by LVH Products GmBH on the one hand statistically and further with the aim to increase the privacy and data security in our company, to ultimately ensure the best possible level of protection of the personal data we process. The anonymous data of the server log files are stored separately from all personal data provided by an affected person.

5. Contact via a website
Due to legal regulations, the LVH Products GmBH website contains information that enables quick electronic contact with our company as well as direct communication with us, which also includes a general address of the electronic mail (e-mail address). If an affected person contacts the data controller by e-mail or through a contact form, the personal data provided by the data subject will be automatically saved. Such personal data, voluntarily transmitted by an individual to the controller, is stored for the purpose of processing or contacting the data subject.

6. Routine deletion and blocking of personal data
The controller processes and stores the personal data of the data subject only for the period required to achieve the purpose of storage or, if so required by law, by the European Directive and/or other legislator or rules which the controller is subject to. If the storage purpose is omitted or if a storage period prescribed by the European directives and regulations or any other relevant legislator expires, the personal data will be routinely blocked or deleted in accordance with the statutory provisions.

7. Rights of the data subject
a) Right to acknowledge each data subject has the right, as granted by the European Directive and Regulatory Authority, to require the controller to confirm whether personal data relating to him or her are being processed. If an affected person wishes to make use of this right of confirmation, they can contact an employee of the controller at any time.

b) Right to information
Any person concerned by the processing of personal data shall have the right granted by the European Directive and Regulatory Authority at any time to obtain from the controller information free of charge concerning the personal data stored about him and a copy of that information. Furthermore, the European legislator and regulator has provided the data subject with the following information:
The processing purposes The categories of personal data being processed The recipients or categories of recipients to whom the personal data have been disclosed or are yet to be disclosed, in particular to recipients in third countries or to international organizations If possible, the planned duration for which the personal data will be stored or, if that is not possible, the criteria for determining that duration
The existence of a right to rectification or erasure of the personal data concerning him or to a restriction of processing by the controller or a right to object to such processing
The existence of a right of appeal to a supervisory authority
If the personal data are not collected from the data subject: All available information on the source of the data The existence of automated decision-making including profiling under Article 22 (1) and (4) of the GDPR and - at least in these cases - meaningful information about the logic involved and the scope and intended impact of such processing on the data subject In addition, the data subject has a right of access as to whether personal data has been transmitted to a third country or to an international organization. If that is the case, then the data subject has the right to obtain information about the appropriate guarantees in connection with the transfer.
If an interested party wishes to exercise this right to information, they may at any time contact an employee of the controller.

c) Right to rectification any person affected by the processing of personal data has the right granted by the European legislator to demand the immediate correction of inaccurate personal data concerning him / her. Furthermore, the data subject has the right to request the completion of incomplete personal data, including by means of a supplementary declaration, taking into account the purposes of the processing. If an affected person wishes to exercise this right of rectification, they may, at any time, contact an employee of the controller.

d) Right to cancellation (right to be forgotten)
Any person affected by the processing of personal data shall have the right granted by the European Directives and Regulators to require the controller to immediately delete the personal data concerning him, provided that one of the following reasons is satisfied and the processing is not required:
The personal data has been collected for such purposes or otherwise processed for which they are no longer necessary. The person concerned revokes the consent on which the processing was based on Article 6 (1) (a) of the GDPR or Article 9 (2) (a) of the GDPR and lacks any other legal basis for the processing. The data subject objects to the processing in accordance with Art. 21 (1) DS-GVO and there are no legitimate reasons for the processing, or the data subject objects to the processing in accordance with Article 21 (2) of the GDPR Processing. The personal data were processed unlawfully. The erasure of personal data is necessary to fulfill a legal obligation under Union or national law to which the controller is subject.
The personal data were collected in relation to information society services offered pursuant to Art. 8 Para 1 DS-GVO. If one of the above reasons is correct and an affected person wishes to arrange for the deletion of personal data stored at LVH Products GmBH, he / she may contact an employee of the controller at any time. The employee of LVH Products GmBH will arrange for the extinguishing request to be fulfilled immediately.
If the personal data have been made public by LVH Products GmBH and if our company is responsible for deleting personal data as the person responsible pursuant to Art. 17 para. 1 DS-GVO, LVH Products GmBH will take appropriate measures, taking into account the available technology and the implementation costs of a technical nature, to inform other data controllers processing the published personal data that the data subject has deleted from all other data controllers any links to such personal data or copies or replications of such personal data as far as the processing is not required. The employee of LVH Products GmBH will arrange the necessary in individual cases.

e) Right to limit processing
Any person affected by the processing of personal data shall have the right granted by the European directive and regulatory authority to require the controller to restrict the processing if one of the following conditions is met: The accuracy of the personal data is contested by the data subject for a period of time that enables the controller to verify the accuracy of the personal data. The processing is unlawful; the data subject refuses to delete the personal data and instead requests the restriction of the use of personal data. The controller no longer needs the personal data for the purposes of processing, but the data subject requires them to assert, exercise or defend legal claims. The person concerned has objection to the processing acc. Art. 21 Para. 1 DS-GVO and it is not yet clear whether the legitimate reasons of the person responsible outweigh those of the person concerned. If one of the above conditions is met and an affected person wishes to request the restriction of personal data stored by LVH Products GmBH, he / she may contact an employee of the controller at any time. The employee of LVH Products GmBH will initiate the restriction of processing.

f) Data transferability
Any person affected by the processing of personal data shall have the right conferred by the European Directives and Regulations to obtain the personal data concerning him / her provided to a controller by the data subject in a structured, common and machine-readable format. It also has the right to transfer this data to another person responsible without hindrance by the controller to whom the personal data was provided, provided that the processing is based on the consent pursuant to Article 6 (1) (a) of the GDPR or Article 9 (1) (b) 2 (a) of the GDPR or on the basis of a contract pursuant to Article 6 (1) (b) of the GDPR and that the processing is carried out by automated means;
Furthermore, in exercising their right to data portability under Article 20 (1) of the GDPR, the data subject has the right to obtain that the personal data are transmitted directly from one controller to another, insofar as this is technically feasible and if so this does not affect the rights and freedoms of others. In order to assert the right to data portability, the data subject can contact an employee of LVH Products GmBH at any time.

g) Right to object
Any person concerned by the processing of personal data shall have the right conferred by the European directive and regulatory authority at any time, for reasons arising from its particular situation, to prevent the processing of personal data relating to it pursuant to Article 6 (1) (e) or f DS-GVO takes an objection. This also applies to profiling based on these provisions. LVH Products GmBH will no longer process your personal data in the event of an objection, unless we can prove that there are compelling legitimate reasons for processing that outweigh the interests, rights and freedoms of the data subject, or the processing is for assertion, exercise or defense of legal claims.
If LVH Products GmBH processes personal data in order to operate direct mail, the data subject has the right to object at any time to the processing of personal data for the purpose of such advertising. This also applies to the profiling, as far as it is associated with such direct mail. If the data subject objects to LVH Products GmBH processing for direct marketing purposes, LVH Products GmBH will no longer process the personal data for these purposes.
In addition, the data subject has the right, for reasons arising from his or her particular situation, against the processing of personal data relating to him or her, which is performed by LVH Products GmBH for scientific or historical research purposes or for statistical purposes pursuant to Art. 89 (1) DS. GMOs are invited to submit an objection unless such processing is necessary to fulfill a task of public interest.
In order to exercise the right to object, the person concerned may directly contact any employee of LVH Products GmBH or another employee. The data subject is also free, in the context of the use of information society services, notwithstanding Directive 2002/58 / EC, to exercise its right of objection by means of automated procedures using technical specifications.

h) Automated decisions in individual cases including profiling
Any person concerned by the processing of personal data shall have the right, as granted by the European legislature and the legislature, not to be subject to a decision based solely on automated processing, including profiling, which has a legal effect on it or, in a similar manner, significantly affects it; unless the decision (1) is necessary for the conclusion or performance of a contract between the data subject and the controller, or (2) under Union or Member State legislation to which the controller is subject,is permitted and that such legislation contains appropriate measures to safeguard the rights, freedoms and legitimate interests of the data subject; or (3) with the express consent of the data subject.
If the decision (1) is required for the conclusion or performance of a contract between the data subject and the controller or (2) it takes place with the express consent of the data subject, LVH Products GmBH shall take appropriate measures to protect the rights and freedoms and the authorized persons Interests of the data subject, including at least the right to obtain the intervention of a person by the controller, to express his / her own position and to contest the decision.
If the data subject wishes to claim automated decision-making rights, they can contact an employee of the controller at any time.

i) Right to revoke a data protection consent Any person affected by the processing of personal data has the right, granted by the European directive and regulatory authority, to revoke consent to the processing of personal data at any time. If the data subject wishes to assert their right to withdraw consent, they may, at any time, contact an employee of the controller.


9. Beneficial interests in the processing that are being pursued by the person responsible or a third party Is the processing of personal data based on Article 6 I lit. f DS-GMO is our legitimate interest in conducting our business for the benefit of all of our employees and our shareholders.

10. Duration for which the personal data are stored the criterion for the duration of the storage of personal data is the respective statutory retention period. After the deadline, the corresponding data will be routinely deleted, if they are no longer required to fulfill the contract or to initiate a contract.

11. Legal or contractual provisions for the provision of personal data; Necessity for the conclusion of the contract; Obligation of the data subject to provide the personal data; possible consequences of non-provision We clarify that the provision of personal data is partly required by law (eg tax regulations) or can also result from contractual provisions (eg information about the contracting party). Occasionally it may be necessary for a contract to be concluded that an affected person provides us with personal data that must subsequently be processed by us. For example, the data subject is obligated to provide us with personal information when our company concludes a contract with her. Failure to provide the personal data would mean that the contract with the person concerned could not be closed. Prior to any personal data being provided by the person concerned, the person concerned must contact one of our employees.

12. Existence of Automated Decision making being a responsible organization, we abstain from automatic decision making and profiling systems.`}</Card>
        </Modal> */}
      <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
        <Card sx={{ padding:4, maxWidth:"70%", maxHeight:"70%",overflow:"auto"}}>
          <h3> Data protection</h3>
          <p>Privacy policy for provider identification acc. GDPR (DS-GVO) from 25.05.2018 </p>

          <p>
            Privacy Policy <br />
            Data protection plays the role as one of the key importance's for the management of
            LVH Products GmBH The use of the web pages of the LVH Products GmBH is possible in
            principle without any indication of personal data. However, if a data subject wishes to
            use our company's special services through our website, personal data processing may be
            required. And for that there is no legal basis for such processing, we generally seek
            the consent of the data subject.
          </p>
          <p>
            We are pleased about your interest in our company. The processing of personal data, such
            as the name, address, e-mail address or telephone number of a subject, is always in
            accordance with the General Data Protection Regulation and in accordance with the
            country-specific data protection provisions applicable to LVH Products GmBH Through this
            privacy policy, our company seeks to inform the public about the nature, scope and
            purpose of the personal information we collect, use and process. Furthermore, data
            subjects are informed of their rights under this privacy policy.
          </p>
          <p>
            LVH Products GmBH, as the controller, has implemented numerous technical and
            organizational measures to ensure the most complete protection possible for personal
            data processed via this website. Nevertheless, Internet-based data transmissions can
            generally have security holes, so that absolute protection can not be guaranteed. For
            this reason, every person concerned is free to submit personal data to us in alternative
            ways, for example by telephone.{" "}
          </p>

          <p>
            1. Definitions
            <br />
            The privacy policy of LVH Products GmBH is based on the terminology used by the European
            directive and regulatory authority in the adoption of the General Data Protection
            Regulation (GDPR). Our privacy policy should be easy to read and understand for the
            public as well as for our customers and business partners. To ensure this, we would like
            to explain in advance the terminology used.{" "}
          </p>

          <p>
            2. Name and address of the controller / group association. The person responsible for
            the General Data Protection Regulation, other data protection laws in the member states
            of the European Union and other provisions with data protection character is:
            <br />
            LVH Products GmBH
            <br />
            Rosengasse 1, Eltville DE65343 ,
            <br />
             Germany
            <br />
            Tel.:+49 6123 703730
            <br />
            E-Mail: info@lvhproducts.de
            <br />
            Website: www.lvhproducts.de
            <br />
            Any data subject can contact our data protection officer at any time with any questions
            and suggestions regarding data protection.{" "}
          </p>

          <p>
            3. Cookies,
            <br />
            The websites of LVH Products GmBH use cookies. Cookies are text files that are stored on
            a system via an Internet Connection. websites and servers use cookies contains a cookie
            ID. Treated as a unique identifier of a cookie. It consists of a string through which
            Internet pages and servers can be assigned to the specific Internet browser in which the
            cookie was stored. This allows visited websites and servers to distinguish the
            individual's browser from other internet browsers that contain other cookies. A
            particular web browser can be recognized and identified by the unique cookie ID.{" "}
          </p>
          <p>
            Through the use of cookies, LVH Products GmBH can provide users of this website with
            more user-friendly services that would not be possible without the cookie setting.
          </p>
          <p>
            By means of a cookie the information and offers on our website can be optimized in user
            oriented way. Cookies allow us, as already mentioned, to recognize the users of our
            website. The purpose of this recognition is to make it easier for users to use our
            website. For example, the user of a website using cookies does not need to re-enter his
            credentials each time he or she visits the website, because this is done by the website
            and the cookies are stored on the user's system. Another example is the cookie of a
            shopping basket in the online shop. The online shop remembers the items that a customer
            has placed in the virtual shopping cart via a cookie. The data subject can prevent the
            setting of cookies through our website at any time by means of a corresponding setting
            of the Internet browser used and thus permanently contradict the setting of cookies.
            Furthermore, already set cookies can be deleted at any time via an internet browser or
            other software programs. This is possible in all common internet browsers. If the data
            subject deactivates the setting of cookies in the Internet browser used, not all
            functions of our website may be fully usable.{" "}
          </p>

          <p>
            Collecting general data and information
            <br />
            The LVH Products GmBH website collects a series of general data and information each
            time the website is accessed by an affected person or an automated system. This general
            data and information is stored in the log files of the server. <br />
            <br />
            (1) Browser types and versions used, <br />
            (2) The operating system used by the accessing system,
            <br />
            (3) The website from which an accessing system accesses our website (so-called
            referrers),
            <br />
            (4) The sub-web pages, which can be accessed via <br />
            (5) The date and time of access to the website, <br />
            (6) An Internet Protocol address (IP address), <br />
            (7) The Internet service provider of the accessing system and
            <br />
            (8) Other similar data and information,
            <br />
            <br />
            When using this general data and information, LVH Products GmBH does not draw
            conclusions about the data subject. Rather, this information is required to <br />
            <br />
            (1) Correctly deliver the contents of our website, <br />
            (2) To optimize the content of our website and to advertise it,
            <br />
            (3) To ensure the continued functioning of our information technology systems and the
            technology of our website, and <br />
            (4) To provide law enforcement authorities with the necessary information for
            prosecution in the event of a cyber-attack. This anonymously collected data and
            information are evaluated by LVH Products GmBH on the one hand statistically and further
            with the aim to increase the privacy and data security in our company, to ultimately
            ensure the best possible level of protection of the personal data we process. The
            anonymous data of the server log files are stored separately from all personal data
            provided by an affected person.
          </p>

          <p>
            5. Contact via a website
            <br />
            Due to legal regulations, the LVH Products GmBH website contains information that
            enables quick electronic contact with our company as well as direct communication with
            us, which also includes a general address of the electronic mail (e-mail address). If an
            affected person contacts the data controller by e-mail or through a contact form, the
            personal data provided by the data subject will be automatically saved. Such personal
            data, voluntarily transmitted by an individual to the controller, is stored for the
            purpose of processing or contacting the data subject.
          </p>

          <p>
            6. Routine deletion and blocking of personal data
            <br />
            The controller processes and stores the personal data of the data subject only for the
            period required to achieve the purpose of storage or, if so required by law, by the
            European Directive and/or other legislator or rules which the controller is subject to.
            If the storage purpose is omitted or if a storage period prescribed by the European
            directives and regulations or any other relevant legislator expires, the personal data
            will be routinely blocked or deleted in accordance with the statutory provisions.
          </p>

          <p>
            7. Rights of the data subject
            <br />
            a) Right to acknowledge each data subject has the right, as granted by the European
            Directive and Regulatory Authority, to require the controller to confirm whether
            personal data relating to him or her are being processed. If an affected person wishes
            to make use of this right of confirmation, they can contact an employee of the
            controller at any time.{" "}
          </p>
          <p>
            b) Right to information
            <br />
            Any person concerned by the processing of personal data shall have the right granted by
            the European Directive and Regulatory Authority at any time to obtain from the
            controller information free of charge concerning the personal data stored about him and
            a copy of that information. Furthermore, the European legislator and regulator has
            provided the data subject with the following information:
            <br />
            The processing purposes The categories of personal data being processed The recipients
            or categories of recipients to whom the personal data have been disclosed or are yet to
            be disclosed, in particular to recipients in third countries or to international
            organizations If possible, the planned duration for which the personal data will be
            stored or, if that is not possible, the criteria for determining that duration
            <br />
            The existence of a right to rectification or erasure of the personal data concerning him
            or to a restriction of processing by the controller or a right to object to such
            processing
            <br />
            The existence of a right of appeal to a supervisory authority
            <br />
            If the personal data are not collected from the data subject: All available information
            on the source of the data The existence of automated decision-making including profiling
            under Article 22 (1) and (4) of the GDPR and - at least in these cases - meaningful
            information about the logic involved and the scope and intended impact of such
            processing on the data subject In addition, the data subject has a right of access as to
            whether personal data has been transmitted to a third country or to an international
            organization. If that is the case, then the data subject has the right to obtain
            information about the appropriate guarantees in connection with the transfer. <br />
            If an interested party wishes to exercise this right to information, they may at any
            time contact an employee of the controller.{" "}
          </p>

          <p>
            c) Right to rectification any person affected by the processing of personal data has the
            right granted by the European legislator to demand the immediate correction of
            inaccurate personal data concerning him / her. Furthermore, the data subject has the
            right to request the completion of incomplete personal data, including by means of a
            supplementary declaration, taking into account the purposes of the processing. If an
            affected person wishes to exercise this right of rectification, they may, at any time,
            contact an employee of the controller.{" "}
          </p>
          <p>
            d) Right to cancellation (right to be forgotten)
            <br />
            Any person affected by the processing of personal data shall have the right granted by
            the European Directives and Regulators to require the controller to immediately delete
            the personal data concerning him, provided that one of the following reasons is
            satisfied and the processing is not required:
            <br />
            The personal data has been collected for such purposes or otherwise processed for which
            they are no longer necessary. The person concerned revokes the consent on which the
            processing was based on Article 6 (1) (a) of the GDPR or Article 9 (2) (a) of the GDPR
            and lacks any other legal basis for the processing. The data subject objects to the
            processing in accordance with Art. 21 (1) DS-GVO and there are no legitimate reasons for
            the processing, or the data subject objects to the processing in accordance with Article
            21 (2) of the GDPR Processing. The personal data were processed unlawfully. The erasure
            of personal data is necessary to fulfill a legal obligation under Union or national law
            to which the controller is subject.
            <br />
            The personal data were collected in relation to information society services offered
            pursuant to Art. 8 Para 1 DS-GVO. If one of the above reasons is correct and an affected
            person wishes to arrange for the deletion of personal data stored at LVH Products GmBH,
            he / she may contact an employee of the controller at any time. The employee of
            LVH Products GmBH will arrange for the extinguishing request to be fulfilled
            immediately.
            <br />
            If the personal data have been made public by LVH Products GmBH and if our company is
            responsible for deleting personal data as the person responsible pursuant to Art. 17
            para. 1 DS-GVO, LVH Products GmBH will take appropriate measures, taking into account
            the available technology and the implementation costs of a technical nature, to inform
            other data controllers processing the published personal data that the data subject has
            deleted from all other data controllers any links to such personal data or copies or
            replications of such personal data as far as the processing is not required. The
            employee of LVH Products GmBH will arrange the necessary in individual cases.
          </p>

          <p>
            e) Right to limit processing <br />
            Any person affected by the processing of personal data shall have the right granted by
            the European directive and regulatory authority to require the controller to restrict
            the processing if one of the following conditions is met: The accuracy of the personal
            data is contested by the data subject for a period of time that enables the controller
            to verify the accuracy of the personal data. The processing is unlawful; the data
            subject refuses to delete the personal data and instead requests the restriction of the
            use of personal data. The controller no longer needs the personal data for the purposes
            of processing, but the data subject requires them to assert, exercise or defend legal
            claims. The person concerned has objection to the processing acc. Art. 21 Para. 1 DS-GVO
            and it is not yet clear whether the legitimate reasons of the person responsible
            outweigh those of the person concerned. If one of the above conditions is met and an
            affected person wishes to request the restriction of personal data stored by
            LVH Products GmBH, he / she may contact an employee of the controller at any time. The
            employee of LVH Products GmBH will initiate the restriction of processing.{" "}
          </p>

          <p>
            f) Data transferability
            <br />
            Any person affected by the processing of personal data shall have the right conferred by
            the European Directives and Regulations to obtain the personal data concerning him / her
            provided to a controller by the data subject in a structured, common and
            machine-readable format. It also has the right to transfer this data to another person
            responsible without hindrance by the controller to whom the personal data was provided,
            provided that the processing is based on the consent pursuant to Article 6 (1) (a) of
            the GDPR or Article 9 (1) (b) 2 (a) of the GDPR or on the basis of a contract pursuant
            to Article 6 (1) (b) of the GDPR and that the processing is carried out by automated
            means;
            <br />
            Furthermore, in exercising their right to data portability under Article 20 (1) of the
            GDPR, the data subject has the right to obtain that the personal data are transmitted
            directly from one controller to another, insofar as this is technically feasible and if
            so this does not affect the rights and freedoms of others. In order to assert the right
            to data portability, the data subject can contact an employee of LVH Products GmBH at
            any time.
          </p>
          <p>
            g) Right to object
            <br />
            Any person concerned by the processing of personal data shall have the right conferred
            by the European directive and regulatory authority at any time, for reasons arising from
            its particular situation, to prevent the processing of personal data relating to it
            pursuant to Article 6 (1) (e) or f DS-GVO takes an objection. This also applies to
            profiling based on these provisions. LVH Products GmBH will no longer process your
            personal data in the event of an objection, unless we can prove that there are
            compelling legitimate reasons for processing that outweigh the interests, rights and
            freedoms of the data subject, or the processing is for assertion, exercise or defense of
            legal claims.
            <br />
            If LVH Products GmBH processes personal data in order to operate direct mail, the data
            subject has the right to object at any time to the processing of personal data for the
            purpose of such advertising. This also applies to the profiling, as far as it is
            associated with such direct mail. If the data subject objects to LVH Products GmBH
            processing for direct marketing purposes, LVH Products GmBH will no longer process the
            personal data for these purposes.
            <br />
            In addition, the data subject has the right, for reasons arising from his or her
            particular situation, against the processing of personal data relating to him or her,
            which is performed by LVH Products GmBH for scientific or historical research purposes
            or for statistical purposes pursuant to Art. 89 (1) DS. GMOs are invited to submit an
            objection unless such processing is necessary to fulfill a task of public interest.
            <br />
            In order to exercise the right to object, the person concerned may directly contact any
            employee of LVH Products GmBH or another employee. The data subject is also free, in the
            context of the use of information society services, notwithstanding Directive 2002/58 /
            EC, to exercise its right of objection by means of automated procedures using technical
            specifications.{" "}
          </p>

          <p>
            h) Automated decisions in individual cases including profiling
            <br />
            Any person concerned by the processing of personal data shall have the right, as granted
            by the European legislature and the legislature, not to be subject to a decision based
            solely on automated processing, including profiling, which has a legal effect on it or,
            in a similar manner, significantly affects it; unless the decision (1) is necessary for
            the conclusion or performance of a contract between the data subject and the controller,
            or (2) under Union or Member State legislation to which the controller is subject,is
            permitted and that such legislation contains appropriate measures to safeguard the
            rights, freedoms and legitimate interests of the data subject; or (3) with the express
            consent of the data subject.
            <br />
            If the decision (1) is required for the conclusion or performance of a contract between
            the data subject and the controller or (2) it takes place with the express consent of
            the data subject, LVH Products GmBH shall take appropriate measures to protect the
            rights and freedoms and the authorized persons Interests of the data subject, including
            at least the right to obtain the intervention of a person by the controller, to express
            his / her own position and to contest the decision. <br />
            If the data subject wishes to claim automated decision-making rights, they can contact
            an employee of the controller at any time.
          </p>
          <p>
            i) Right to revoke a data protection consent Any person affected by the processing of
            personal data has the right, granted by the European directive and regulatory authority,
            to revoke consent to the processing of personal data at any time. If the data subject
            wishes to assert their right to withdraw consent, they may, at any time, contact an
            employee of the controller.
          </p>
          <p>
            8. Legal basis of processing Art. 6 I lit. A DS-GMO serves our company as the legal
            basis for processing operations where we obtain consent for a particular processing
            purpose. If the processing of personal data is necessary to fulfill a contract of which
            the data subject is a party, as is the case, for example, in processing operations
            necessary for the supply of goods or the provision of any other service or
            consideration, processing shall be based on Art. 6 I lit. b DS-GMO. The same applies to
            processing operations that are necessary to carry out pre-contractual measures, for
            example in cases of inquiries about our products or services. If our company is subject
            to a legal obligation which requires the processing of personal data, such as the
            fulfillment of tax obligations, the processing is based on Art. 6 I lit. c DS-GMO. In
            rare cases, the processing of personal data may be required to protect the vital
            interests of the data subject or another natural person. This would be the case, for
            example, if a visitor to our premises were injured and his / her name, age, health
            insurance or other vital information would have to be passed on to a doctor, hospital or
            other third party. Then the processing would be based on Art. 6 I lit. d DS-GMO are
            based. Ultimately, processing operations could be based on Art. 6 I lit. f DS-GMOs are
            based. On this legal basis, processing operations that are not covered by any of the
            above legal bases are required if processing is necessary to safeguard the legitimate
            interests of our company or a third party, unless the interests, fundamental rights and
            fundamental freedoms of the person concerned prevail. Such processing operations are
            particularly permitted because they have been specifically mentioned by the European
            legislator. In that regard, it considered that a legitimate interest could be assumed if
            the data subject is a customer of the controller (recital 47, second sentence, DS-BER).
            if processing is necessary to safeguard the legitimate interests of our company or a
            third party, provided the interests, fundamental rights and fundamental freedoms of the
            person concerned do not prevail. Such processing operations are particularly permitted
            because they have been specifically mentioned by the European legislator. In that
            regard, it considered that a legitimate interest could be assumed if the data subject is
            a customer of the controller (recital 47, second sentence, DS-BER). if processing is
            necessary to safeguard the legitimate interests of our company or a third party,
            provided the interests, fundamental rights and fundamental freedoms of the person
            concerned do not prevail. Such processing operations are particularly permitted because
            they have been specifically mentioned by the European legislator. In that regard, it
            considered that a legitimate interest could be assumed if the data subject is a customer
            of the controller (recital 47, second sentence, DS-BER).
          </p>
          <p>
            9. Beneficial interests in the processing that are being pursued by the person
            responsible or a third party Is the processing of personal data based on Article 6 I
            lit. f DS-GMO is our legitimate interest in conducting our business for the benefit of
            all of our employees and our shareholders.
          </p>
          <p>
            10. Duration for which the personal data are stored the criterion for the duration of
            the storage of personal data is the respective statutory retention period. After the
            deadline, the corresponding data will be routinely deleted, if they are no longer
            required to fulfill the contract or to initiate a contract.
          </p>
          <p>
            11. Legal or contractual provisions for the provision of personal data; Necessity for
            the conclusion of the contract; Obligation of the data subject to provide the personal
            data; possible consequences of non-provision We clarify that the provision of personal
            data is partly required by law (eg tax regulations) or can also result from contractual
            provisions (eg information about the contracting party). Occasionally it may be
            necessary for a contract to be concluded that an affected person provides us with
            personal data that must subsequently be processed by us. For example, the data subject
            is obligated to provide us with personal information when our company concludes a
            contract with her. Failure to provide the personal data would mean that the contract
            with the person concerned could not be closed. Prior to any personal data being provided
            by the person concerned, the person concerned must contact one of our employees.
          </p>
          <p>
            12. Existence of Automated Decision making being a responsible organization, we abstain
            from automatic decision making and profiling systems.
          </p>
        </Card>
      </Modal>
      <MKBox
        width="100%"
        display="flex"
        mb={2}
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <MKBox
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          width="100%"
          color={light ? "white" : "text"}
          fontSize={size.sm}
          justifyContent="space-between"
        >
          <MKTypography variant="body2" color="secondary" fontWeight="regular">
            &copy; {new Date().getFullYear()} , <strong>LVH Products GmbH</strong>, All Rights
            Reserved
            <br />
          </MKTypography>
          <MKTypography
            onClick={() => toggleModal()}
            variant="caption"
            color="secondary"
            fontWeight="regular"
          >
            Terms & Conditions | Privacy
          </MKTypography>
        </MKBox>
        {/* <MKBox
          component="ul"
          sx={({ breakpoints }) => ({
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            mt: 3,
            mb: 0,
            p: 0,

            [breakpoints.up("lg")]: {
              mt: 0,
            },
          })}
        >
          {renderLinks()}
        </MKBox> */}
      </MKBox>
    </Container>
  );
}

// Setting default values for the props of SimpleFooter
SimpleFooter.defaultProps = {
  company: { href: "https://www.creative-tim.com/", name: "Creative Tim" },
  links: [
    { href: "https://www.creative-tim.com/", name: "Creative Tim" },
    { href: "https://www.creative-tim.com/presentation", name: "About Us" },
    { href: "https://www.creative-tim.com/blog", name: "Blog" },
    { href: "https://www.creative-tim.com/license", name: "License" },
  ],
  light: false,
};

// Typechecking props for the SimpleFooter
SimpleFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.shape),
  light: PropTypes.bool,
};

export default SimpleFooter;
