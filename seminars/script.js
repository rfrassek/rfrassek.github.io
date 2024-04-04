
// Define the seminars variable with sample data
 
    // Sample seminar data
  var seminars = [
  
    
{ date: '16/05/2024', speaker: 'Zoltan Bajnok',affiliation: 'Budapest', title: 'n/a'    , abstract:  'n/a'   },

{ date: '09/05/2024', speaker: 'Gunter Schuetz',affiliation: 'Lisbon', title:  'n/a'   , abstract:  'n/a'   },

{ date: '11/04/2024', speaker: 'Andrea Cavaglia',affiliation: 'Torino', title: 'Studying N=4 super Yang-Mills theory with integrability and conformal bootstrap'    , abstract:   'I will discuss an interplay between two different methods, namely integrability and the numerical conformal bootstrap, to study of N=4 Super Yang-Mills theory. On the integrability side, I will describe an exact method to compute exactly the spectrum of the theory by solving a complex analysis problem, known as quantum spectral curve. Then, we will see how the knowledge of the spectrum, joined with local constraints typical of conformal field theories, allows to bootstrap with great precision other more complicated observables, for example the value of a 4-point correlator. The setup considered will be the one of observables living on a supersymmetric Wilson line. Based on works with N. Gromov, J. Julius, M. Preti and N. Sokolova.'  },

{ date: '10/04/2024', speaker: 'Nicolo Primi',affiliation: 'Torino', title: 'Form factors for integrable spin chains via Separation of Variables'    , abstract:   'We introduce Functional Separation of Variables (FSoV) in integrable spin chains based on the Yangian Y(gl(N)). This technique allows to compute scalar products between any of the so-called factorisable state, including all eigenvectors of the tower of conserved charges, in a compact determinant form. We show how to use FSoV to compute form factors of a complete basis of operators of the spin chain. We do so by defining the Principal Operators, a special family of operators that generate the full Yangian symmetry. Using the new technique of Character Projection, we show that off-diagonal form factors of the Principal Operators can also be expressed as determinants. Finally, we explicitly obtain matrix elements of the same principal operators on the so-called SoV basis. These can be used to obtain form factors of any number of insertions of principal operators, giving access to spin chain correlation functions. We conclude by briefly discussing the application of FSoV to open spin chain based on representations of the twisted Yangians.'  },

{ date: '04/12/2023', speaker: 'Chiara Paletta',affiliation: 'Ljubljana', title: 'Hidden strong symmetries in a range 3 deformation of the Hubbard model' , abstract: 'We examine a spin chain representing an open quantum system governed by the Lindblad equation, with external driving acting in the bulk. This model corresponds to a new integrable range 3 elliptic deformation of the Hubbard model. We show the appearance of multiple nonequilibrium steady states (NESS): the system retains memory of the initial state, even though the well-known invariance under spin su(2) and charge su(2) transformations of the Hubbard Hamiltonian is broken. We motivate this phenomenon by the existence of hidden strong symmetries in the form of quasi-local operators. Based on the works 2301.01612 and 2305.01922 with M. de Leeuw, B. Pozsgay and E. Vernier.' },


{ date: '27/11/2023', speaker: 'Andrea Raimondo',affiliation: 'Bergamo', title: 'ODE/IM correspondence for affine sl2 Gaudin models', abstract: 'Since the pioneering works of Dorey-Tateo and Bazhanov-Lukyanov-Zamolodchikov, it is known that the connection coefficients of certain 1-dimensional Schroedinger operators (with "monster potentials") satisfy the so called QQ-system for the quantum KdV model. This relation, which is known as "ODE/IM correspondence", has been subject of intense research in the last twenty years, and has been generalized to many other pairs of operators/quantum integrable models. After the work of Frenkel, the ODE/IM correspondece is expected to be an instance of the geometric Langlands correspondence. In the present talk I will first review the original ODE/IM correspodence, and then I will consider Schroedinger operators constructed starting from solutions to the affine sl2 Gaudin Bethe ansatz equations. These operators are different from the Schroedinger operators with monster potential, but their connection coefficients satisfy the same QQ-system. Time permitting, I describe the conjecture that the Q-functions obtained from the Gaudin Bethe equations coincide with the Q-functions of the Bazhanov-Lukyanov-Zamolodchikov operators with monster potential. The talk is based on a joint work with Davide Masoero and Evgeny Mukhin.' },

{ date: '13/11/2023', speaker: 'Cristian Giardina',affiliation: 'Modena', title: 'Exactly solvable models of energy transport: from micro to macro', abstract: 'n/a' },




{ date: '13/11/2023', speaker: 'Pablo Ferrari',affiliation: 'Buenos Aires', title: 'Hidden Temperature in the KMP model', abstract: 'In the KMP model a positive energy  is associated with each site . When a Poisson clock rings at the bond with energies , those values are substituted by and , respectively, where  is a uniform random variable in . The energy at the boundary vertices   is always an exponential random variable with mean , the fixed boundary condition. We show that the stationary measure for the resulting Markov process is the distribution of a vector  with coordinates , where are iid exponential (1) random variables, the law of  is the invariant measure for an opinion model with the same boundary conditions, and  are independent. The result confirms a conjecture based on the large deviations of the model. The discrete derivative of the opinion model behaves as a neural spiking process, which is also analised. The hydrostatic limit shows that the empirical measure associated to the stationary distribution converges to the linear interpolation of the boundary values. Joint work with Anna de Masi and Davide Gabrielli.' },

        
{ date: '23/10/2023', speaker: 'Filippo Colomo',affiliation: 'Florence', title: 'Arctic curves of the four-vertex model', abstract: 'Under specific choices of fixed boundary conditions, and in a suitable scaling limit, various dimer and vertex models may exhibit peculiar thermodynamics behaviour, with the emergence of regions of order and disorder, sharply separated by a smooth curve, called arctic curve. We start by reviewing the state of the art in the field and illustrate some of its numerous connections with other branches of mathematics and physics, ranging from algebraic combinatorics to quantum quenches. In the second part, we focus on the four-vertex model with so-called boxed plane partitions boundary conditions, and determine the analytic expression of the corresponding arctic curve. The derivation is based on the exact evaluation of suitable correlation functions, discriminating spatial transition from order to disorder, in terms of the partition function of some discrete log-gas associated to Hahn polynomials. As a by-product, we also deduce that the arctic curve’s fluctuations are governed by the Tracy-Widom distribution.' },

        { date: '16/10/2023', speaker: 'Leonardo de Carlo',affiliation: 'Bologna', title: 'Hodge decomposition and hydrodynamics with vorticity: Results and Open Problems', abstract: 'After a brief introduction of Hodge decomposition theorem in the context of stochastic lattice gases, we will present itsimplications in the theory of hydrodynamics and scaling limits of these models. The presentation will be focused on the study of a simple solvable model on the 2d-torus. But results are general. Showing how in 2-dimensions the diffusioncoefficient is not always given by the known Green-Kubo’s formula (GK), which is at the foundation of non-equilibriumphysics, seemingly indicating a violation of Fick’s law. The reason is due to a vorticity term in the current. Between the open problems we will note that the macroscopic fluctuation theory can not be applied directly to this case because of the lack of proportionality between the mobility matrix and the diffusion matrix computed from GK.' }, 



  // Add more seminar entries as needed
];

    // Function to create popup overlay
    function createPopup(index) {
      var popup = document.createElement("div");
      popup.className = "overlay";
      popup.onclick = function() { closePopup(index); };

      var popupContent = document.createElement("div");
      popupContent.className = "popup";
      popupContent.onclick = function(event) { event.stopPropagation(); };

      var closeBtn = document.createElement("span");
      closeBtn.className = "close";
      closeBtn.innerHTML = "&times;";
      closeBtn.onclick = function() { closePopup(index); };

      var seminar = seminars[index];
      var popupTitle = document.createElement("h3");
      popupTitle.innerText = seminar.title;

      var popupAbstract = document.createElement("p");
      popupAbstract.innerText = seminar.abstract;

      popupContent.appendChild(closeBtn);
      popupContent.appendChild(popupTitle);
      popupContent.appendChild(popupAbstract);
      popup.appendChild(popupContent);

      document.body.appendChild(popup);
      return popup;
    }

    // Function to show popup for speaker abstract
    function showPopup(index) {
      var popup = createPopup(index);
      popup.style.display = "block";
    }

    // Function to close popup for speaker abstract
    function closePopup(index) {
      var popup = document.querySelector(".overlay");
      if (popup) {
        popup.style.display = "none";
        popup.remove();
      }
    }

    // Function to parse date in dd/mm/yyyy format
    function parseDate(dateString) {
      var parts = dateString.split("/");
      return new Date(parts[2], parts[1] - 1, parts[0]);
    }

    // Function to split speakers into past and future sections
    function displaySpeakers() {
      var currentDate = new Date();
      var pastSpeakers = [];
      var futureSpeakers = [];

      // Iterate through the list of seminars
      seminars.forEach(function(seminar, index) {
        var seminarDate = parseDate(seminar.date);
        var speakerName = seminar.speaker;
        var affiliation = seminar.affiliation;
        var title = seminar.title;

    var formattedDate = seminar.date; // You can format the date as needed here

    // Construct the HTML for the speaker entry, including date before speaker name
    var speakerInfo = "<li>" + formattedDate + " - " + speakerName + " (" + affiliation + ") - <a href='#' onclick='showPopup(" + index + ")'>" + title + "</a></li>";

 

        if (seminarDate < currentDate) {
          pastSpeakers.push(speakerInfo);
        } else {
          futureSpeakers.push(speakerInfo);
        }
      });

      // Populate past speaker list
      document.getElementById("pastSpeakers").innerHTML = pastSpeakers.join("");

      // Populate future speaker list
      document.getElementById("futureSpeakers").innerHTML = futureSpeakers.join("");
    }

    // Call the displaySpeakers function when the page loads
    window.onload = displaySpeakers; 
