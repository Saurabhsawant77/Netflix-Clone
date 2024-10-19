import React, { useState } from "react";


const Accordion = () => {
    const [accordionOpenIndex, setAccordionOpenIndex] = useState(null);
    const obj = [
        {
            title: 'What is Netflix ?',
            desc: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.

    You can watch as much as you want, whenever you want, without a single ad all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`
        },
        {
            title: 'How much does Netflix costs ?',
            desc: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.`
        },

        {
            title: "Where can I watch ?",
            desc: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
        },

        {
            title: "How do I cancel ?",
            desc: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees \– start or stop your account anytime.`,
        },
        {
            title: "What can I watch on Netflix ?",
            desc: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
        },
        {
            title: "Is netflix good for Kids ?",
            desc: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don\'t want kids to see.`,
        }
    ];


    const toggleAccordion = (index) => {
        setAccordionOpenIndex(accordionOpenIndex === index ? null : index);
    };

    return (
        <div className="bg-black">
            {obj.map((item, index) => (
                <div className="colap p-4 m-2 bg-slate-600 text-white text-2xl   " key={index}>
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="flex justify-between w-full "
                    >
                        <span className="py-2">{item.title}</span>
                        {/* Optional: Use accordionOpenIndex to toggle the icon */}
                        <div className="py-2 item-center">
                        <svg
                            className="fill-white shrink-0 ml-8"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="7"
                                width="20"
                                height="2"
                                rx="1"
                                className={`transform origin-center transition duration-200 ease-out ${accordionOpenIndex === index && "!rotate-180"
                                    }`}
                            />
                            <rect
                                y="7"
                                width="20"
                                height="2"
                                rx="1"
                                className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpenIndex === index && "!rotate-180"
                                    }`}
                            />
                        </svg>
                        </div>
                    </button>
                    <div
                        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpenIndex === index
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            } `}
                    >
                        <div className="overflow-hidden text-2xl text-white border-t  border-black">
                            <h1 className="py-4 ">{item.desc}</h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Accordion;
