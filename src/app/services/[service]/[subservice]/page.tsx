"use client";
import PageHeader from '@/components/page-header';
import React, { useEffect } from 'react'
import Aos from "aos";
type ServiceKey = "web-design-development" | "mobile-app-development" | "e-commerce-development" | "enterprise-solutions" | "qa-testing" | "ui-ux" |
"data-science" | "ai-and-machine-learning" | "extended-reality" | "blockchain" | "automation" | "staffing-services" | "recruitment-services" |
"workday-services" | "kronos-consulting-services" | "jira-consulting-services"

const data = {
  "web-design-development": {
    desc: "We assist organisations in designing end-to-end customised web apps to address specific business objectives.",
    title1: "Web Design & Development",
    img: "/images/individual-service/web-design-development.png",
    para1: "Techthrivesystem believes in making ideas happen rather than just thinking about them. We are a professional web development company that offers end-to-end custom web apps to meet business requirements. Our services are designed to use next-generation technologies to develop breakthroughs that will help businesses stand out from the crowd.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Improved Efficiency",
        desc: "We provide custom web apps development services to help businesses streamline their business operations, lowering execution time while increasing accuracy."
      },
      {
        title: "Easy Accessibility",
        desc: "Web apps provide businesses with the same functionality as desktop applications and can be accessed at any time and from any location on any internet-connected device."
      },
      {
        title: "Effective Maintenance",
        desc: "Web applications are designed to use the least amount of storage space possible. It is easy to maintain and upgrade since it runs efficiently on cloud-based infrastructure."
      },
      {
        title: "Consumer engagement",
        desc: "Web application services provide a platform to promote your products and services and engage your consumer base, which is crucial for business."
      },
      {
        title: "Advanced Security",
        desc: "We create web apps with robust data privacy and security procedures to guard against any errors, security breaches, and data leaks."
      },
    ]
  },
  "mobile-app-development": {
    desc: "We combine robust functionality with appealing visuals to give your vision a significant presence.",
    title1: "Mobile App Development",
    img: "/images/individual-service/mobile-app-development.png",
    para1: "Techthrivesystem constantly works to provide our clients with top-notch app development services as a leading mobile app development company in, Duabi, New York, USA. We provide the most cutting-edge and scalable enterprise-grade solutions available, from full-stack development to just consulting. Our cutting-edge technologies that make our products interoperable, scalable, secure, and quick serve as the direction for our app development process.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Streamline procedures and methods",
        desc: "We built specialised software that enables businesses to coordinate the accumulation of all corporate data in a single system that helps streamline procedures and processes."
      },
      {
        title: "Boosts sales and services",
        desc: "Our software optimises business operations by integrating a system to track elements of your end-to-end sales process, further boosting brand value and revenue."
      },
      {
        title: "Ongoing support and maintenance",
        desc: "We make sure to offer our clients ongoing support and maintenance in addition to development as part of our services.Our Developers are available to give technical support in the event of a technical failure or crisis."
      },
      {
        title: "High Security",
        desc: "We developed software with the most advanced security standards and cutting-edge technologies in compliance with all security regulations, enabling the protection of sensitive data."
      },
      {
        title: "Scalable and Customised Solution",
        desc: "We are specialists in developing unique solutions best suited to the business requirement. Our team integrates all the necessary components for efficient business operations."
      },
    ]
  },
  "e-commerce-development": {
    desc: "E-commerce solutions to empower you with customer retention and your digital business goals",
    title1: "E-commerce Development",
    img: "/images/individual-service/e-commerce-development.png",
    para1: "Techthrivesystem offers a comprehensive range of e-commerce web development services along with expertise in design, implementation, migration, support, and maintenance. We assist in enhancing client satisfaction, growing audiences, and generating revenue. We ensure that the best development technologies and a strong business plan are used to create your website.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Increased reach",
        desc: "E-commerce development allows businesses to reach customers beyond their geographical location. Consumers can access the online store at any time and from any place in the world, making it extremely convenient and accessible."
      },
      {
        title: "Higher conversion rates",
        desc: "E-commerce websites are made to be easy to use and offer smooth automated processes, such as inventory management, order tracking, and payment processing. Compared to conventional physical stores, this results in better conversion rates."
      },
      {
        title: "Flexibility",
        desc: "Businesses can quickly adjust to shifting market conditions and client expectations because of e-commerce development. The online business can easily add new products or services to the store, and prices can be changed promptly."
      },
      {
        title: "Cost-effective",
        desc: "E-commerce development is the most cost-effective method of selling goods or services online. Physical stores are no longer required, which lowers the overhead expenses for renting, infrastructure, utilities, and staff."
      },
      {
        title: "Improved customer insights",
        desc: "E-commerce websites give businesses access to useful data and insights about their customers. This data can be used to create targeted marketing campaigns, improve product offerings, and enhance the overall customer experience."
      },
    ]
  },
  "enterprise-solutions": {
    desc: "The business consulting practice at Techthrivesystem has improved the lives of numerous business owners and preserved the jobs and careers of a few thousand workers.",
    title1: "Enterprise Solution",
    img: "/images/individual-service/enterprise-solutions.png",
    para1: "Techthrivesystem is distinctive in a variety of ways, including our way of thinking, how we address problems, how we engage with clients, and how we come up with creative solutions. We provide business solutions that focus on outcomes and return on investment. To ensure turnaround time is as quick as possible, we concentrate on the pain points for our clients and offer tailored solutions.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Improved Efficiency",
        desc: "We can help businesses streamline their operations, automate manual tasks, and reduce the time and resources required to complete tasks, leading to improved efficiency."
      },
      {
        title: "Better Data Management",
        desc: "Our team can help businesses manage their data more effectively by providing a centralized platform to store, manage and access data, which improves accuracy and reduces the risk of data loss."
      },
      {
        title: "Improved Decision Making",
        desc: "Enterprise solutions, such as business intelligence and analytics tools, provide businesses with valuable insights and data, which can help them make better-informed business decisions."
      },
      {
        title: "Increased Collaboration",
        desc: "We provide a centralized platform for communication and collaboration, allowing team members to work together more efficiently and effectively."
      },
      {
        title: "Better Customer Service",
        desc: "Enterprise solutions, such as CRM systems, enable businesses to improve customer service by providing a comprehensive view of customer data, facilitating effective communication and collaboration with customers."
      },
    ]
  },
  "qa-testing": {
    desc: "By using our quality assurance services, you can create high quality products and provide remarkable customer experiences.",
    title1: "QA & Testing",
    img: "/images/individual-service/qa-testing.png",
    para1: "Techthrivesystem's managed software quality assurance services ensure that your output is consistently of the highest calibre. We provide guidance on the best quality assurance procedures and assist in their creation and application. We provide outstanding QA automation testing services to assist businesses in reducing time-to-market while maintaining a high level of quality. Our QA team assists businesses in finding, examining, and resolving problems that affect the performance of their products at peak load.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Improved Efficiency",
        desc: "We can help businesses streamline their operations, automate manual tasks, and reduce the time and resources required to complete tasks, leading to improved efficiency."
      },
      {
        title: "Enhanced customer satisfaction",
        desc: "By ensuring the software is free of defects and meets the customer's needs, the customer is more satisfied with the product. This results in improved customer loyalty, repeat business, and positive reviews."
      },
      {
        title: "Reduced costs",
        desc: "By detecting defects early in the software development cycle, the cost of fixing those defects is significantly lower than if they are found later. This also reduces the overall cost of development and maintenance of the software."
      },
      {
        title: "Improved software quality",
        desc: "QA and Testing services help to identify and fix defects and bugs in the software application before it is released to the end-users. This ensures that the software is of high quality and meets the customer's expectations."
      },
      {
        title: "Compliance with standards and regulations",
        desc: "Many industries have strict regulations and standards that software applications must adhere to. QA and Testing services ensure that the software complies with these regulations and standards."
      },
    ]
  },
  "ui-ux": {
    desc: "We combine robust functionality with appealing visuals to give your vision a significant presence.",
    title1: "UI & UX Development",
    img: "/images/individual-service/ui-ux.png",
    para1: "Techthrivesystem is a reputable UI/UX design firm focused on offering clients user-friendly and growth-oriented solutions. Our expert UI-UX designers analyze industry trends and conduct in-depth research to incorporate into the design and deliver cutting-edge user interfaces and experiences.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Enhances user satisfaction",
        desc: "By keeping the user's demands and preferences in mind during the design process, UI/UX development ensures that the final product is user-friendly and accessible, resulting in user satisfaction."
      },
      {
        title: "Improves brand identity",
        desc: "A well-designed and user-friendly product can help create a positive brand identity and increase brand loyalty. This can lead to repeat customers and positive word-of-mouth marketing."
      },
      {
        title: "Improves SEO",
        desc: "Top-notch UX/UI design can increase a website or app's usability and accessibility, which can raise the site or app's search engine ranking and increase traffic and brand recognition."
      },
      {
        title: "Reduced costs",
        desc: "Design issue detection through UI/UX development reduces the need for later, expensive redesigns and modifications by enabling the identification of issues during the initial stages of development."
      },
      {
        title: "Provides a competitive advantage",
        desc: "A well-designed and user-friendly product can differentiate a business from its competitors, providing a competitive advantage in the market."
      },
    ]
  },
  "data-science": {
    desc: "We offer tailored solutions that empower you to make informed decisions, optimize processes, and achieve your business objectives",
    title1: "Data Science Services",
    img: "/images/individual-service/data-science.png",
    para1: "Techthrivesystem is a highly regarded data science consulting company that provides data science services utilising AI and ML technologies to create more valuable technical solutions for clients all over the world. We implement complete big data solutions that seamlessly incorporate data science technologies like machine learning, artificial intelligence, and deep learning.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Better decision-making",
        desc: "We offer companies valuable insights that can be used to make more informed and effective business decisions."
      },
      {
        title: "Enhanced security",
        desc: "Data science can be used to detect and prevent cybersecurity threats, helping companies to protect their sensitive data and information."
      },
      {
        title: "Improved customer experience",
        desc: "We help to better understand their customers and their needs, allowing for the creation of more personalized and effective products and services."
      },
      {
        title: "Competitive advantage",
        desc: "We provide companies with a competitive advantage by enabling them to make data-driven decisions, identify new opportunities, and innovate more quickly."
      },
      {
        title: "Increased efficiency",
        desc: "By using data science to optimize operations and processes, companies can reduce costs, improve productivity, and increase efficiency."
      }
    ]
  },
  "ai-and-machine-learning": {
    desc: "Empower your business by leveraging its hidden potential using machine learning and AI technologies.",
    title1: "AI & Machine Learning Development Services",
    img: "/images/individual-service/ai-and-machine-learning.png",
    para1: "Artificial Intelligence and Machine Learning services from Techthrivesystem are innovation-driven, designed to transform and boost businesses, ensuring you stay ahead of the competition. The potential is infinite when using our AI and ML solutions, allowing you to get the most out of your data and gain new insights and revenue sources.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Enhanced efficiency",
        desc: "Our AI and machine learning technologies automate repetitive tasks, reducing the time and effort required to complete them. This helps increase productivity and efficiency."
      },
      {
        title: "Improved accuracy",
        desc: "Machine learning algorithms analyze large amounts of data and make decisions with high accuracy. This assists businesses in making better decisions and reducing errors."
      },
      {
        title: "Competitive advantage",
        desc: "By using AI and machine learning technologies, businesses can gain a competitive advantage by offering better products, services, and customer experiences."
      },
      {
        title: "Predictive analytics",
        desc: "Machine learning algorithms can analyze historical data to make predictions about future trends or outcomes, helping businesses make informed decisions and stay ahead of the competition."
      },
      {
        title: "Personalization",
        desc: "AI and machine learning can analyze customer data to provide personalized experiences, such as product recommendations, tailored marketing campaigns, and personalized customer service."
      }
    ]
    
  },
  "extended-reality": {
    desc: "For your audience to understand the value of XR on an enterprise scale, create lifelike XR experiences, such as virtual reality apps and augmented reality software.",
    title1: "Extended Reality Services",
    img: "/images/individual-service/extended-reality.png",
    para1: "Techthrivesystem guides the XR and 5G ecosystem towards a split-rendering architecture that offers an effective end-to-end solution. Increase audience engagement by creating immersive experiences. We will assist you in creating and delivering immersive experiences by leveraging Extended Reality (XR) technologies like augmented, virtual, or mixed realities.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Better customer experiences",
        desc: "We use extended reality to create virtual showrooms, product demonstrations, and other experiences that allow customers to interact with products and services in a more immersive way."
      },
      {
        title: "Improved training and education",
        desc: "We use extended reality to create interactive training and educational materials that allow users to learn by doing. This can be especially beneficial in fields where hands-on experience is critical, such as medicine or engineering."
      },
      {
        title: "Competitive advantage",
        desc: "IT companies can differentiate themselves from their competitors and position themselves as leaders in the industry."
      },
      {
        title: "Enhanced user engagement",
        desc: "We provide immersive experiences that can engage users in a way that traditional methods cannot. This can lead to increased user engagement and interest in the company's products or services."
      },
      {
        title: "Increased efficiency and productivity",
        desc: "We use extended reality to create virtual workspaces and training environments, which can increase efficiency and productivity by reducing the need for physical resources and travel."
      }
    ]
  },
  "blockchain": {
    desc: "With Blockchain we will solve insurmountable issues of your business.",
    title1: "Blockchain Services",
    img: "/images/individual-service/blockchain.png",
    para1: "Techthrivesystem assists clients in building trustworthy, dependable, and sustainable ecosystems for their enterprises. By developing useful business/incentive models for all ecosystem participants, we are promoting the enterprise-wide adoption of blockchain-powered business networks across industries.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Enhanced Security",
        desc: "Blockchain technology is highly secure due to its decentralized and encrypted nature. We leverage this technology to build secure systems that protect sensitive data, prevent fraud, and reduce cyber threats."
      },
      {
        title: "Improved Transparency",
        desc: "Blockchain technology enables the creation of transparent systems that can be audited and verified by anyone. We can help build trust with customers, partners, and investors."
      },
      {
        title: "Greater Control",
        desc: "Blockchain technology enables us to maintain greater control over their data and systems. We can help reduce the risk of data breaches, hacks, and other security threats."
      },
      {
        title: "Reduced Costs",
        desc: "By using blockchain technology, we can reduce costs associated with intermediaries, third-party service providers, and other overhead expenses. We can help increase profitability and competitiveness."
      },
      {
        title: "Increased Efficiency",
        desc: "We can help organizations streamline their processes by automating many of the manual tasks involved in managing data and transactions. We can also help reduce costs and improve operational efficiency."
      }
    ]
    
  },
  "automation": {
    desc: "Our IT company offers comprehensive automation services to streamline your business processes and increase efficiency.",
    title1: "Automation Services",
    img: "/images/individual-service/automation.png",
    para1: "Techthrivesystem is committed to helping businesses optimize their operations and achieve their goals. Our team of experienced professionals specializes in developing and implementing custom automation solutions that are tailored to meet the unique needs of each client. We leverage the latest technologies and industry best practices to streamline processes, increase efficiency, and reduce errors.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Increased Efficiency",
        desc: "We will help eliminate repetitive and time-consuming tasks, freeing up employees to focus on more strategic and complex projects."
      },
      {
        title: "Improved Accuracy",
        desc: "Automated processes are less prone to human error, resulting in fewer mistakes and improved accuracy."
      },
      {
        title: "Cost Savings",
        desc: "We will help reduce labour costs and minimize the need for manual intervention, ultimately saving money in the long run."
      },
      {
        title: "Greater Visibility",
        desc: "We provide greater visibility into operations and performance, enabling organizations to make more informed decisions and identify areas for improvement."
      },
      {
        title: "Enhanced Scalability",
        desc: "Automated systems can easily adapt to changes in business volume, allowing organizations to scale up or down as needed."
      }
    ]
  },
  "recruitment-services": {
    desc: "Techthrivesystem specialises in bringing excellence to the business by assisting you in recruiting talented individuals.",
    title1: "Recrutiment Services",
    img: "/images/individual-service/recruitment-services.png",
    para1: "We are a leading recruiting firm that assists businesses with hiring qualified individuals. Our aim is to provide businesses with recruiting services that will enable them to hire more quickly and run their businesses more efficiently. In addition, we provide recruiting partnerships with set durations.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Talent Identification",
        desc: "Techthrivesystem is a renowned recruitment service provider that gives leading businesses access to a pool of high-quality passive applicants. We provide a thorough recruiting procedure starting with pre-screening applications to find experts that are seasoned and eager to engage with organizations."
      },
      {
        title: "Faster Recruitment",
        desc: "We connect with potential qualified applicants and businesses more quickly. Our recruiters have a strong understanding of technology, access to large databases, and a network of connections that enable them to quickly match employers with qualified individuals, speeding up the hiring process."
      },
      {
        title: "Save Time",
        desc: "Our recruitment solution strives to free up time for organizations to focus on growth by dramatically reducing recruiting time. To supply competent individuals to customers, we provide a full hiring process that encompasses everything from screening through onboarding."
      },
      {
        title: "Industry Expertise",
        desc: "We avail businesses with candidates that help them stand out in the market with their industry expertise. We have industry-specific specialist recruiters to assist you in hiring experts with industry knowledge to meet your market trends."
      },
      {
        title: "Employee Retention",
        desc: "We ensure that customers receive qualified employees who are well skilled, trained, and dedicated to their jobs. Our focus is to recruit performers who are engaged with their productivity in order to strengthen company culture and brand, consequently enhancing employee retention in the organization."
      }
    ]
    
  },
  "staffing-services": {
    desc: "Techthrivesystem is your trusted staffing partner, bridging the gap between competent workers and employers.",
    title1: "Staffing Services",
    img: "/images/individual-service/staffing-services.png",
    para1: "Techthrivesystem is a premier staffing service provider that specialises in providing skilled corporate resources to ensure that business operations run smoothly. Our experienced staffing team assists organisations in employing competent personnel who are most suited to fulfil their company requirements and assist in the achievement of goals.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Increased Availability of Skilled Labor",
        desc: "With our staff augmentation services, we supply organizations with a diverse range of skilled, competent, and experienced individuals. We focus on specialized domain-centric recruitment of highly skilled professionals with extensive skill training best suited for the job."
      },
      {
        title: "Efficiency in Operations",
        desc: "Our services strive to improve operational efficiency by providing flexible working environments. We provide businesses with trained professionals with domain-centric knowledge through our skilled staff augmentation services. Our augmented staff provides value to our clients by leveraging cutting-edge technology to enhance operational efficiency."
      },
      {
        title: "Cost Effective",
        desc: "At Techthrivesystem, we make certain that the customer receives the necessary resources at a reasonable rate. Our services enable firms to pay staff for a specific period of time while incurring no additional fees. The team assists firms in cost-effectively increasing their market reach."
      },
      {
        title: "Hassle-Free Hiring Process",
        desc: "Each organization's recruitment procedure is intricate in order to bring in quality individuals. Our staff augmentation services are intended to provide quick, effective workflows, reduce paperwork, and increase production. We handle hiring so that businesses may concentrate on their operations."
      },
      {
        title: "Enhanced Productivity",
        desc: "Our team strives to provide qualified staff to the business in accordance with their needs so that they can finish projects more quickly. Furthermore, our team assists organizations to be flexible in their service network development to increase the overall productivity of the companies."
      }
    ]
  },
  "workday-services": {
    desc: "Techthrivesystem offers Workday practices, providing comprehensive services utilizing Workday HR and Finance solutions.",
    title1: "Workday Consulting Services",
    img: "/images/individual-service/workday-services.png",
    para1: "Techthrivesystem Workday Consulting Services offers efficient and responsive management for Workday applications to help businesses in financial management, human resource management, and business planning. We have a workforce with the expertise to assist businesses in capitalizing more on core business priorities while significantly lowering expenses and ensuring long-term sustainability.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Customization",
        desc: "We help our clients customize the software to meet their unique business needs. This includes configuring the software to meet specific requirements, integrating it with other systems, and developing custom reports and dashboards."
      },
      {
        title: "Support",
        desc: "We also provide ongoing support to help businesses resolve issues and optimize the software over time. This includes training and development for employees as well as ongoing maintenance and upgrades to the software."
      },
      {
        title: "Expertise",
        desc: "Workday consulting services provide access to experienced consultants who have deep expertise in implementing and optimizing Workday software. They can help businesses make the most of the software and achieve their business goals."
      },
      {
        title: "Time-saving",
        desc: "Implementing Workday software can be time-consuming and complex. Techthrivesystem's consulting services can help organizations save time by streamlining the implementation process and ensuring that the software is fully operational in a shorter timeframe."
      },
      {
        title: "Scalability",
        desc: "Our Workday consulting services can help companies scale their use of the software as their business grows. Techthrivesystem provides guidance on how to expand the use of Workday to support additional business processes and functions."
      }
    ]
    
  },
  "kronos-consulting-services": {
    desc: "Our team specialises in connecting businesses with their network of skilled Kronos talent so that they can use Kronos to operate more efficiently.",
    title1: "Kronos Consulting Services",
    img: "/images/individual-service/kronos-consulting-services.png",
    para1: "Global clients are served by our Kronos Service Line. Contributing significantly both on-site and in the cloud. Time & Attendance, Leave Management, Activity Management, Advanced Scheduling, and Analytics end-to-end implementation and support. When it comes to contract workforce management, end-to-end business processes, bill verification, and master data upkeep, Techthrivesystem is unique in offering Kronos solutions.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Enhanced Compliance",
        desc: "We provide tools to help organizations comply with labor laws and regulations. This can help reduce the risk of penalties and legal disputes."
      },
      {
        title: "Increased Efficiency",
        desc: "We can help automate time-consuming HR and payroll processes, such as data entry and scheduling. This can save businesses time and money and free up resources to focus on other important tasks."
      },
      {
        title: "Improved Employee Engagement",
        desc: "By streamlining HR processes, we can help improve employee engagement by reducing administrative burdens and increasing transparency in HR policies."
      },
      {
        title: "Improved Time and Attendance Management",
        desc: "We offer time and attendance management solutions that help organizations accurately track employee hours, monitor attendance, and manage schedules."
      },
      {
        title: "Better Workforce Planning",
        desc: "We offer workforce analytics and reporting tools that can help businesses make informed decisions about workforce planning, including scheduling, hiring, and training."
      }
    ]
  },
  "jira-consulting-services": {
    desc: "We offer an end-to-end solution focused on value creation for your entire team, with best-in-class Agile tooling and deep integrations.",
    title1: "Jira Consulting",
    img: "/images/individual-service/jira-consulting-services.png",
    para1: "Techthrivesystem offers Jira consulting services to help businesses run more efficiently while also being more productive. We will help you scale, develop, and grow, no matter what your needs are. Utilise Techthrivesystem consulting services for Jira software, Jira work management, Confluence, and other tools to start living a more productive life. You'll find it easier with us.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Customized Jira Implementation",
        desc: "We can help organizations to customize their Jira implementation to meet their specific needs and requirements."
      },
      {
        title: "Efficient Workflow",
        desc: "We can help organizations to design and implement efficient workflows that can help them to streamline their processes and improve their productivity."
      },
      {
        title: "Training and Support",
        desc: "We can provide training and support to help organizations to use Jira effectively and efficiently."
      },
      {
        title: "Integration with Other Tools",
        desc: "We can help organizations to integrate Jira with other tools such as Confluence, Bitbucket, and Slack to create a seamless workflow."
      },
      {
        title: "Custom Reports",
        desc: "We can help organizations to create custom reports that can provide valuable insights into their projects and help them to make data-driven decisions."
      }
    ]
    
  },
  "salesforce-consulting": {
    desc: "Assisting numbers of people in realising the full potential of your Salesforce implementation, work with our team of certified Salesforce consultants and technologists.",
    title1: "Salesforce Consulting Services",
    img: "/images/individual-service/salesforce-consulting.png",
    para1: "Techthrivesystem will improve the customer experience while transforming the way your business operates. Your business can benefit from greater efficiency and a higher return on investment by implementing Salesforce applications and working with a Certified Salesforce Consultant. As a certified Salesforce consultant, we assist you in growing your company by developing CRM tools tailored to your industry.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Improved Efficiency",
        desc: "We can help streamline business processes and automate manual tasks. This can result in increased productivity and efficiency, as well as cost savings."
      },
      {
        title: "Customized Solutions",
        desc: "We can help businesses tailor the Salesforce platform to their specific needs. Consultants can help businesses develop custom workflows and integrations."
      },
      {
        title: "Expertise and Support",
        desc: "We are experts in the platform and can provide guidance and support to businesses throughout the implementation and maintenance process."
      },
      {
        title: "Data Analytics",
        desc: "We can help businesses leverage the platform's powerful analytics capabilities to gain insights into customer behavior and preferences."
      },
      {
        title: "Scalability",
        desc: "We can help businesses scale their operations as they grow. Our consultants can help businesses optimize their Salesforce deployment."
      }
    ]
  },
  "service-now-consulting": {
    desc: "Services that will empower your business maximize the use of the ServiceNow platform by delivering innovative solutions.",
    title1: "Servicenow Consulting Services",
    img: "/images/individual-service/service-now-consulting.png",
    para1: "The ServiceNow consulting services provided by Techthrivesystem help companies enhance their overall productivity by streamlining their IT operations. By offering a range of IT service management (ITSM) tools and automation capabilities, our ServiceNow consulting services provide businesses with a variety of benefits that will accelerate your business growth.",
    title2: "How our services benefit businesses",
    items: [
      {
        title: "Expertise",
        desc: "Techthrivesystem's ServiceNow consulting services help organizations optimize their use of ServiceNow by identifying areas for improvement and suggesting best practices."
      },
      {
        title: "Customization",
        desc: "We help businesses customize the platform to meet their specific needs. This includes configuring workflows, creating custom applications, and integrating with other systems."
      },
      {
        title: "Support",
        desc: "Our ServiceNow consulting services offer ongoing assistance to companies, ensuring that the platform is running effectively and that any problems are resolved as soon as they emerge."
      },
      {
        title: "Training",
        desc: "Techthrivesystem provides training to employees on how to use the platform effectively. This helps businesses maximize their investment in the platform and improve their overall productivity."
      },
      {
        title: "Implementation",
        desc: "Businesses can implement the platform effectively and quickly with the aid of our ServiceNow consulting services. Contrary to building the platform independently, this can save time and money."
      }
    ]
    
  },
}

const InnerServiceComponent = ({ params }: { params: { subservice: string } }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
    });
  }, []);
  const serviceName = params.subservice

  if (Object.keys(data).includes(serviceName) === false) return <div className='h-full w-full overflow-hidden pb-12'>
    <p className='uppercase text-md md:text-4xl font-semibold text-red-600 mt-10 text-center'>404 - Service not exits</p>
  </div>
  const serviceData = data[serviceName as ServiceKey];
  return (
    <div className='h-full w-full overflow-hidden pb-12'>
      <PageHeader title={serviceName} desc={serviceData.desc} />
      <div className="md:p-16 p-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <h2 className='text-5xl font-bold'><span className='text-[#1A1F65]'>{serviceData.title1} </span></h2>
          <p className="mt-4 text-gray-600 text-lg">{serviceData.para1}</p>
        </div>
        <div className="mt-12 md:mt-0">
          <img src={serviceData.img} alt="About Us Image" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>
      <div className='p-8 md:16 gap-8 flex flex-col'>
        <h2 className='text-4xl text-center font-bold text-[#211E6D]'>{serviceData.title2}</h2>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
          {
            serviceData.items.map((item, i) => {
              return(
                <div key={i} className='bg-white border border-gray-200 rounded-lg p-3 flex flex-col gap-1 cursor-pointer hover:shadow-lg transition-shadow' data-aos="fade-up" data-aos-delay="300">
                      {/* <img src="/images/usps/delivery.png" className='h-12 w-fit' alt="" /> */}
                      <p className='text-xl font-semibold'>
                          <span>
                              {item.title}
                          </span>
                      </p>
                      <span className='h-1 w-14 rounded bg-[#211E6D]'></span>
                      <p className='mt-3 text-left md:text-justify border-l-[3px] -ml-3 pl-3'>
                          {item.desc}
                      </p>
                  </div>
              )
            })
          }
            </div>
      </div>
    </div>
  )
}

export default InnerServiceComponent
