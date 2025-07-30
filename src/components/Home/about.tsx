import Image from "next/image";

const services = [{
    title: 'Website Design',
    description: 'We help you create plans for reaching your desired audience and turning them into customers.',
    icon: '/images/icons/icon-1.svg',
    color: '#FFC26E'
},
{
    title: 'Web Development',
    description: 'We help you create plans for reaching your desired audience and turning them into customers.',
    icon: '/images/icons/icon-2.svg',
    color: '#F7B0FF'
},
{
    title: 'Conversion Rate Optimisation (CRO)',
    description: 'We help you create plans for reaching your desired audience and turning them into customers.',
    icon: '/images/icons/icon-3.svg',
    color: '#29FFC6'
},
{
    title: 'Search Engine Optimisation (SEO)',
    description: 'We help you create plans for reaching your desired audience and turning them into customers.',
    icon: '/images/icons/icon-4.svg',
    color: '#F3FF4F'
}];

const statistics = [{
    icon: '/images/icons/icon-5.svg',
    number: '20+',
    description: 'Projects Delivered',
    color: '#FB4E29',
    gridStartCol: 1,
    gridEndCol:3,
    gridStartRow: 1,
    gridEndRow: 2
},{
    icon: '/images/icons/icon-6.svg',
    number: '98%',
    description: 'Client Satisfaction',
    color: '#FFFFFF',
    gridStartCol: 4,
    gridEndCol:6,
    gridStartRow: 1,
    gridEndRow: 1
},{
    icon: '/images/icons/icon-7.svg',
    number: '2M',
    description: 'E-Commerce Sales',
    color: '#FFFFFF',
    gridStartCol: 4,
    gridEndCol:6,
    gridStartRow: 1,
    gridEndRow: 1
},{
    icon: '/images/icons/icon-8.svg',
    number: '+120%',
    description: 'Revenue Growth',
    color: '#FFFFFF',
    gridStartCol: 7,
    gridEndCol:9,
    gridStartRow: 2,
    gridEndRow: 2
},{
    icon: '/images/icons/icon-9.svg',
    number: '2.4',
    description: 'Average Rank on Google',
    color: '#FFFFFF',
}]

const About = ({id}: {id: string}) => {
    return (
        <section id={id} className="w-full px-6 sm:px-[60px] lg:px-[120px]">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <h4 className="text-[#FB4E29] text-[14px] md:text-[16px] lg:text-[20px] font-normal uppercase">
                            Meet The Founders
                        </h4>
                        <h2
                        className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold capitalize text-center"
                        style={{
                            lineHeight: "1.3",
                        }}
                        >
                            With a Global Reputation
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between w-full gap-8">
                    <div className="flex-1 flex flex-col justify-center">
                        <p className="text-lg">In early 2024, Enclave was founded by Siddharth and Avishek to bridge a critical gap in the digital marketing landscape. They observed that digital marketing solutions were often siloed, lacking the integrated expertise across Design, Engineering, and Data Analytics required for true growth.</p>
                        <br />
                        <p className="text-lg">Enclave was built to be different. We unite these three core pillars to deliver cohesive, data-driven strategies that build powerful digital experiences. With over seven years of combined experience helping startups and growth-stage companies expand their online presence, we have empowered more than 10 businesses to not just launch, but thrive online. Our mission is to build the most compelling digital experiences that drive measurable results.</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                        <Image src={"/images/team/siddharth-a.png"} height={240} width={320} alt="Siddharth Agarwal - Enclave Studios"/>
                        <Image src={"/images/team/avishek-m.png"} height={240} width={320} alt="Avishek Majumder - Enclave Studios"/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;