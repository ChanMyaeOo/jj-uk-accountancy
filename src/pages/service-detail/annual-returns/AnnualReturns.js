import React from 'react'
import HeroSection from '../../../components/hero-section/HeroSection'
import ServiceNav from '../service-nav/ServiceNav'
import Accordion from '../../../components/accordion/Accordion'
import CarouselLarge from '../../../components/carousel-large/CarouselLarge'
import CarouselSmall from '../../../components/carousel-small/CarouselSmall'
import ReviewContact from '../../../components/review-contact/ReviewContact'
import useStyles from './styles'

const AnnualReturns = () => {
    const classes = useStyles();
    const title = 'Flexible and Reliable'
    const content = 'London based BNA Consulting offers direct services for all your bookkeeping needs both in a full or part-time capacity which means that we at BNA can take care of all your bookkeeping needs, either for a day or a month to a long-term commitment, all depending on your needs. BNA consulting also offers bookkeeping service professional off-site bookkeeping services UK for business development and small business start-ups. We are also more than willing to aid companies which have limited office space or have outgrown their own by providing excellent, flexible and reliable bookkeeping and consulting services.'
    const title1 = 'Scalable to Your Needs'
    const content1 = 'Due to increasing hikes in London office-space prices, our services would be the perfect solution to help out your fledgeling business and to help you grow your business. With us taking care of your bookkeeping you have your hands free to do whatever you want with the additional office area. Be at ease as both English and Russian speaking experts at our office are doing their best to keep your bookkeeping in check and your business running smoothly.'
    const title2 = 'Keeping your books in order'
    const content2 = 'BNA Consulting is at the top of all accounting needs for their clients, especially because we believe in versatility. By employing English and Russian speaking accountants in London we can assess your problem by understanding your needs and we make custom-tailored solutions for each of our clients. We invest time in our clients making sure that we understand what they require of our services and exactly how we can reach the goals are clients strive to achieve. We at BNA Consulting are building on our flexibility and practical skills by specialising in online accounting while also having experience with employing the latest bookkeeping trends.'
    return (
        <div>
        <HeroSection title="Annual Returns"/>
        <div className={classes.serviceContainer}>
            
                
            <ServiceNav />

            <div className={classes.serviceContent}>
                <h3>Annual Returns</h3>
                <p>BNA Consulting in London provides a quite review of a company’s general information, which includes the details about the officers of the company (e.g. directors and company secretary), registered office address, share capital and full details of shareholders. Since the confirmation statement has replaced the annual return to Companies House with effect from 30 June 2016 we at BNA Consulting have worked on acquiring the skills to handle these changes by employing expert English and Russian speaking accountants in London.</p>
                <br />
                <p>BNA Consulting supports all limited companies and Limited liability partnership in the UK, but we also provide support for professional Services for Business Development and small business start-ups. BNA Consulting also takes care of the footwork when it comes to the processes where your company must have to Annual Returns in London form to Companies House every year even if the company is dormant. BNA Consulting will aid Limited companies to submit the ‘’AR01’’ form and Limited liability partnership submits ‘’LL AR01’’.</p>
                <br />
                <h4>Filing Deadline &map; Penalties</h4>
                <p>We at BNA Consulting will aid you in the paperwork concerning filing deadline &amp; penalties with our staff of employing expert English and Russian speaking accountants in London.</p>
                <br />
                <p>BNA Consulting will take care of every situation, such as when the Companies House send email alerts and reminders to registered office address when it comes due.</p>
                <br />
                <p>This due date is usually a year after either:</p>
                <ul>
                    <li>the date when a company was incorporated.</li>
                    <li>the date when last annual return or confirmation statement was filed.</li>
                </ul>
                <br />
                <p>BNA Consulting will assist you with the Confirmation statement which must be filed within 14 days after the due date.</p>
                <br/>
                <p>If a company fails to submit a confirmation statement within the deadline, it may be fined up to £5,000 and the registrar also has the authority to strike off the company from the company’s register and its assets become the property of the crown, however this measure will not be taken against you because are capable English and Russian speaking accountants in London will do all the paperwork for you, quickly and meticulously.</p>
                <br/>
                <p>BNA Consulting can aid you with Annual Return filing Services Form which can be submitted online through the Companies House ‘’Web Filing system’’, online submission of an Annual Returns for companies via its Web Filing system costing just £13. Which is something BNA Consulting experts will take care of in your stead. We can file through “web filing” and provide you with reminders regularly when your Annual return Becomes due, we will be there. We will take care of the contents of the confirmation statement such as the company name, type, registered office address and details about officers in a clean and presentable way.</p>


            </div>
        </div>
        
        <CarouselLarge />
        <CarouselSmall />
        <ReviewContact />
        </div>
    )
}

export default AnnualReturns