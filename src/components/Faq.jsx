import Accordian, { AccordianItem } from "./Accordion";

function Faq() {
  return (
    <div>
      <p className="bg-black bg-opacity-95 pt-20 pb-40 text-5xl text-white font-bold text-center flex items-center justify-center">
        <p className="text-rose-500">Frequently&nbsp;</p> Asked Questions
      </p>
      {/* Adjust the padding or margin to shift upward */}
      <main className="min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-95 ">
        <div className="-mt-96">
        <Accordian className="max-w-[1500px] bg-black bg-opacity-95 text-white">
          <AccordianItem value="1" trigger="What's the best way to prepare for coding interviews?">
          Preparation is key and we are here make you prepared! Consistent practice with coding problems is more effective than last-minute cramming. Tuf also helps you simulate the interview environment check out [link to your interview prep resources]. We've got dedicated sections for practice problems, coding challenges, and guides!
          </AccordianItem>
          <AccordianItem value="2" trigger="How should I approach system design interview questions?">
          System design is About the Framework, Not the Perfect Solution. Demonstrate your ability to think about scale, trade-offs, and constraints. Interviewers want to see your process, not a single right answer. Understand the user requirements, the scale of the system, and what aspects are most important to focus on (e.g., availability, consistency). We have system design guides and examples at [link to your system design resources].
          </AccordianItem>
          <AccordianItem value="3" trigger="Are the Striver's SDE sheet questions enough for interview preparation?">
          The Striver's SDE Sheet is a valuable resource and a one stop solution to all your coding doubts and interview preparation. It's a good point to cover core concepts and it has in and out questions which covers most of the conceptual topics of DSA. The sheet helps to supplement your practice with additional problem sets.
          </AccordianItem>
          <AccordianItem value="4" trigger="How do I get the most out of your webiste or TUF community?">
          TakeUForward helps you prepare as per your preparation timeline. We have different sheets which cover requirement for specific users. We have content for both noob coders and expert level coders. We are soon coming with more features on our platform which will include mentorship program, live doubt sessions, and many moreee.
          </AccordianItem>
          <AccordianItem value="5" trigger="What are the essential things to cover in core coding subjects?">
          To build a strong and complete interview strategy, one must include core subjects and focus on it. Along with DSA, Database Management System (DBMS), OOPs (Object Oriented Programming), Operating System and Computer networks are the main subjects to focus upon. We have all the important questions along with detailed articles for each of these subjects on our platform.
          </AccordianItem>
          <AccordianItem value="6" trigger="Do you offer any mentorship or career guidance programs?">
          Currently we have career raodmap which cater to different goals for different users. With tuf+ coming soon we will include both mentorship and career guidance along with Mock interviews and much more. So stay tuned!
          </AccordianItem>
          
        </Accordian>
        </div>
      </main>
    </div>
  );
}

export default Faq;
