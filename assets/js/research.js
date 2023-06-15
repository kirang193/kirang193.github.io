/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Design and Implementation of Cost Effective Autonomous Obstacle-avoiding vacuum Cleaner Robo-car using Arduino",
    authors:
      "Gajjela Kiran Kumar, Peddi Rohtih, VNVSS Jayadithya, Mude Rohith, Ramavathu Murali",
    conferences:
      "Demonstrated at Asia's 2nd Largest TechFest, Technex IIT(BHU)",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/roomba.jpeg",
    citation: {
      vancouver:
        "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "In this age of households increasingly employing automation to perform routine chores, vacuum cleaner plays an integral role.While conventional vacuum cleaners have made our life easier, they are bulky, noisy and non-user friendly. Hence, there is an increasing need to re-design the vacuum cleaner in accordance with present-day requirements and technologies. The robot moves autonomously and has a sensor to detect an object, like a wall, and send this info to the microcontroller, Arduino Uno. Now, the Arduino instructs the servo, and hence the sensor, to move and measure the obstacles in each direction. Then according to the measurements, the Arduino performs the necessary course correction, thereby avoiding obstacles.",
    absbox: "absPopup1",
    link: "https://drive.google.com/file/d/1IiG1RBG8CxogycA8zpvgpKctlwc3_T-e/view?usp=drive_link",
  },

  {
    title: "Deep Learning-based CNN-BiLSTM Model for Accurate Occupancy Prediction in Buildings using Environmental Analysis",
    authors:
      "Gajjela Kiran Kumar, Peddi Rohith",
    conferences:
      "Presented infront of highly-skilled academic professors and scholars of IIT(BHU) in ABLT",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/models.jpg",
    citation: {
      vancouver:
        "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "We propose a model that tackles the issue of electric consumption wastage with help of occupancy prediction, which is crucial to manage HVAC systems that constitute almost 50% of the energy consumption. Our model which consists of CNN and BiLSTM layers outperformed all existing models with an average accuracy of 99.55%.",
    absbox: "absPopup2",
    link: "https://drive.google.com/file/d/1Ke6mxWYojPqfNzChBBqsdfXiI8BdLaHM/view?usp=drive_link",
  },

  {
    title:
      "A comprehensive study of Artificial Neural Networks And Machine Learning Algorithms",
    authors: "Gajjela Kiran Kumar, Eshaan Aggarwal",
    conferences:
      "Gave a talk in Pattern Recognition Lab, guided and supervised by our favourite Professor Pratik Chattopadhyay.",
    researchYr: 2023,
    citebox: "popup3",
    image: "assets/images/research-page/NN.jpg",
    citation: {
      vancouver:
        "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "We explored and understood in-depth the different types of ML Algorithms(Linear, Logistic, SVM, K-Means, Elbow method, etc). We choose the Iris and DryBean dataset for implementation and CIFAR-10 dataset for implementation. Project is primarily focussed on studying various machine learning algos and implementing on real time datasets, validating the results and putting efforts to improve the accuracy.",
    absbox: "absPopup3",
    link: "https://docs.google.com/document/d/19pYN-JJcmkd4sBbTW7z_RC1C20lPlaKd/edit?usp=drive_link&ouid=115893683102387493012&rtpof=true&sd=true",
  },

  
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
      link,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <a target="_blank" href="${link}">
                        <button class="button button-accent button-small text-right button-abstract " type="button">
                            LINK
                        </button>
                        </a>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
