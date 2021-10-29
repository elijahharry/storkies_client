import * as api from "@utils/server";

import Main from "@components/Main/Main";
import Hero from "@components/Hero/Hero";
import TextImage from "@components/Blocks/TextImage/TextImage";

const About = ({ favorites }) => {
  return (
    <Main
      title="About Us"
      desc="Our founders & team have a passion for cannabis have been collectively involved in the cannabis industry for over 25 years. Starting in the medical cannabis industry, we successfully transitioned into the recreational industry upon its inception and joined forces with a cannabis distribution company in Sacramento..."
    >
      <Hero
        id="about"
        title="About us"
        subtitle="Our story"
        collage={{ images: favorites, slides: 3 }}
      />
      <TextImage
        title="Company Origins"
        desc="Our founders & team have always had a passion & respect for cannabis, dope branding, and great customer service! Since being involved in the cannabis industry for so long, we have assessed the overall need of the most important of it all - YOU, the end user! After years of planning, we decided to launch our vision for a high-quality, customer-oriented delivery service. We provide a safe & reliable source for cannabis products to a wide variety of patients and recreational consumers."
        decor="High-quality & customer-oriented!"
        color="secondary"
        subfolder="sets"
        img={images.a}
      />
      <TextImage
        title="Our Mission"
        desc="Our mission is to provide a welcoming platform for our customers to purchase high-quality, affordable cannabis products. We believe that cannabis is both a medicine and a gift that should be shared with all those who need it, and we want our service to embody an inclusive environment for consumers of all types. If you haven't noticed yet... We have a broad selection of Clothing and Merchandise collections! We partner with any-and-all locally-owned Sacramento companies with a positive mission - whether it be to provide clothing services from our in-house clothing production, mutually marketing projects, sponsored events, etc.The shrinking stigma around cannabis use is deeply rooted in many areas of our society, and we want to remind our customers that they are safe and welcome by providing unparalleled customer service at a price that reflects our desire to provide value to our consumer rather than just produce profits."
        decor="Cannabis is a gift & medicine worth sharing!"
        color="primary"
        flipped
        subfolder="sets"
        img={images.b}
      />
      <TextImage
        title="Who We Are"
        desc="At Storkies, we encompass the warmhearted relationship of a fun-loving old friend while embracing the caring attitude of an affectionate parent.  Whether you are seeking much-needed relief through the medicinal properties of cannabis, or enjoying the sensational, recreational aspects of cannabis, we want you to feel pleasantly received.   Through economical business modeling, effective management, and conscious business ethics, we efficiently provide our services without sacrificing our values."
        decor="We are obssessed with meeting your needs!"
        color="secondary"
        subfolder="sets"
        img={images.c}
      />
    </Main>
  );
};

export default About;

export async function getStaticProps() {
  const favorites = await api.fetchFavorites();
  return { props: { favorites: favorites }, revalidate: 5 };
}

const images = {
  a: {
    src: "/images/about-1.jpg",
    blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAMABQMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAACP/EACEQAAAGAgEFAAAAAAAAAAAAAAECAwQGEQAHEgUTQUNh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwX/xAAZEQEAAwEBAAAAAAAAAAAAAAABAAIDBCH/2gAMAwEAAhEDEQA/AKl0FsObTqAt+rymSvXjsVVrUA/a96hQCk+IVxIUKrx9G2MYenlkJR5wcqrP/9k=",
  },
  b: {
    src: "/images/about-2.jpg",
    blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAMABQMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABv/EAB4QAAIBBQADAAAAAAAAAAAAAAIDAQAFBhESBxMi/8QAFAEBAAAAAAAAAAAAAAAAAAAABv/EAB8RAAEDAwUAAAAAAAAAAAAAAAEAAgMEMUEREzJRYv/aAAwDAQACEQMRAD8AoPEucZVnCbndMqu53B4N9KxNYCpQA54jC1DELD5EYnkY3AjE75jSlKM1UERl1LRYYHQTmilfs8jd2fRX/9k=",
  },
  c: {
    src: "/images/about-3.jpg",
    blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAQABQMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAAB//EACEQAAIBAwMFAAAAAAAAAAAAAAECAwAEEQUGEgcIIjFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAcEQABAwUAAAAAAAAAAAAAAAAAAQIDEiIxUbH/2gAMAwEAAhEDEQA/AK7tru16txG+uJZtMuGmuHGJ4JHVBG7RjiOfjkICce2JP2lKUUS2lsrUqxrh/9k=",
  },
  d: {
    src: "/images/about-4.jpg",
    blur: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAAYABQMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAABf/EAB8QAAICAQQDAAAAAAAAAAAAAAECAwQGAAUHERIhIv/EABQBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAwARIRP/2gAMAwEAAhEDEQA/ALeOco5DtmNbNsT8bYJYatTaZI68TUoI43szqPFUjb6LRP2AFUAJ17LANNNDF7LOxrgvKE//2Q==",
  },
};
