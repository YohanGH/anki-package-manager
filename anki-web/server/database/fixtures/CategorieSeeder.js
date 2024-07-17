const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)
const UserSeeder = require("./UserSeeder");

class CategorieSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "categorie", truncate: true, dependencies: [UserSeeder] });
  }

  // The run method - Populate the 'categorie' table with predefined data
  run() {
    // List of predefined categories
    const categories = [
      { title: 'Artificial Intelligence', description: 'Study of intelligent agents.' },
      { title: 'Machine Learning', description: 'Field of study that gives computers the ability to learn without being explicitly programmed.' },
      { title: 'Data Science', description: 'Field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from data.' },
      { title: 'Cybersecurity', description: 'Protection of computer systems and networks from information disclosure, theft of, or damage to their hardware, software, or electronic data.' },
      { title: 'Cloud Computing', description: 'Delivery of computing services over the Internet.' },
      { title: 'Blockchain', description: 'Decentralized ledger technology.' },
      { title: 'Internet of Things', description: 'Network of physical objects that are embedded with sensors, software, and other technologies.' },
      { title: 'Virtual Reality', description: 'Simulated experience that can be similar to or completely different from the real world.' },
      { title: 'Augmented Reality', description: 'Interactive experience of a real-world environment.' },
      { title: 'Big Data', description: 'Field that treats ways to analyze, systematically extract information from, or otherwise deal with data sets that are too large or complex to be dealt with by traditional data-processing application software.' },
      { title: 'Quantum Computing', description: 'Area of computing focused on developing computer technology based on the principles of quantum theory.' },
      { title: 'Software Development', description: 'Process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.' },
      { title: 'Mobile Development', description: 'Creation of software intended to run on mobile devices.' },
      { title: 'Web Development', description: 'Work involved in developing a website for the Internet or an intranet.' },
      { title: 'DevOps', description: 'Set of practices that combines software development (Dev) and IT operations (Ops).' },
      { title: 'Networking', description: 'Practice of interfacing two or more computing devices with each other for the purpose of sharing data.' },
      { title: 'Database Management', description: 'System software for creating and managing databases.' },
      { title: 'Operating Systems', description: 'System software that manages computer hardware, software resources, and provides common services for computer programs.' },
      { title: 'Artificial Neural Networks', description: 'Computing systems inspired by the biological neural networks that constitute animal brains.' },
      { title: 'Natural Language Processing', description: 'Subfield of linguistics, computer science, and artificial intelligence concerned with the interactions between computers and human language.' },
      { title: 'Robotics', description: 'Branch of technology that deals with the design, construction, operation, and application of robots.' },
      { title: 'Embedded Systems', description: 'Computer system with a dedicated function within a larger mechanical or electrical system.' },
      { title: 'Game Development', description: 'Art of creating games and describes the design, development and release of a game.' },
      { title: 'IT Support', description: 'Range of services providing assistance with technology products such as computers, mobile phones, software products, or other electronic or mechanical goods.' },
      { title: 'Digital Marketing', description: 'Component of marketing that utilizes the internet and online based digital technologies.' },
      { title: 'E-commerce', description: 'Activity of electronically buying or selling of products on online services or over the Internet.' },
      { title: 'IT Project Management', description: 'Process of planning, organizing, and delineating responsibility for the completion of an organizations\' specific information technology (IT) goals.' },
      { title: 'Software Testing', description: 'Process of executing a program or application with the intent of finding software bugs.' },
      { title: 'System Architecture', description: 'Conceptual model that defines the structure, behavior, and more views of a system.' },
      { title: 'IT Governance', description: 'Framework that ensures that IT investments support business objectives.' },
      { title: 'IT Compliance', description: 'Ensuring that a company’s IT systems and data are compliant with the standards and regulations.' },
      { title: 'Digital Transformation', description: 'Use of new, fast and frequently changing digital technology to solve problems.' },
      { title: 'Biometrics', description: 'Field of study in which technology is used to measure and analyze biological data.' },
      { title: 'Augmented Analytics', description: 'Use of enabling technologies such as machine learning and artificial intelligence to assist with data preparation, insight generation and insight explanation to augment how people explore and analyze data in analytics and BI platforms.' },
      { title: 'Wearable Technology', description: 'Category of electronic devices that can be worn as accessories, embedded in clothing, implanted in the user’s body, or even tattooed on the skin.' },
      { title: 'Artificial General Intelligence', description: 'Hypothetical ability of an intelligent agent to understand or learn any intellectual task that a human being can.' },
      { title: 'Smart Homes', description: 'Residence that uses internet-connected devices to enable the remote management and monitoring of systems and appliances.' },
      { title: 'Smart Cities', description: 'Urban area that uses different types of electronic data collection sensors to supply information used to manage assets and resources efficiently.' },
      { title: '5G Technology', description: 'Fifth-generation technology standard for broadband cellular networks.' },
      { title: 'Edge Computing', description: 'Distributed computing paradigm that brings computation and data storage closer to the sources of data.' },
      { title: 'Voice Recognition', description: 'Ability of a machine or program to receive and interpret dictation, or to understand and carry out spoken commands.' },
      { title: 'Facial Recognition', description: 'Technology capable of identifying or verifying a person from a digital image or a video frame.' },
      { title: 'Autonomous Vehicles', description: 'Vehicles capable of sensing their environment and moving safely with little or no human input.' },
      { title: 'Cryptography', description: 'Practice and study of techniques for securing communication and data in the presence of adversaries.' },
      { title: 'Computer Vision', description: 'Field of artificial intelligence that trains computers to interpret and understand the visual world.' },
      { title: 'Cyber-Physical Systems', description: 'Mechanisms that are controlled or monitored by computer-based algorithms, tightly integrated with the internet and its users.' },
      { title: 'Digital Twins', description: 'Virtual representation that serves as the real-time digital counterpart of a physical object or process.' },
      { title: 'Extended Reality', description: 'Umbrella term encapsulating augmented reality (AR), virtual reality (VR), and mixed reality (MR).' },
    ];

    // Insert the categories into the 'categorie' table
    const categoryPromises = categories.map(category => this.insert(category));

    return Promise.all(categoryPromises);
  }
}

// Export the CategorieSeeder class
module.exports = CategorieSeeder;
