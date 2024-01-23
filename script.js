

document.addEventListener('DOMContentLoaded', function () {
    // Sample seminar data, replace with your own
    const seminars = [
        { date: '16/10/2023', speaker: 'Leonardo de Carlo',affiliation: 'Bologna', topic: 'Hodge decomposition and hydrodynamics with vorticity: Results and Open Problems', abstract: 'After a brief introduction of Hodge decomposition theorem in the context of stochastic lattice gases, we will present itsimplications in the theory of hydrodynamics and scaling limits of these models. The presentation will be focused on the study of a simple solvable model on the 2d-torus. But results are general. Showing how in 2-dimensions the diffusioncoefficient is not always given by the known Green-Kubo’s formula (GK), which is at the foundation of non-equilibriumphysics, seemingly indicating a violation of Fick’s law. The reason is due to a vorticity term in the current. Between the open problems we will note that the macroscopic fluctuation theory can not be applied directly to this case because of the lack of proportionality between the mobility matrix and the diffusion matrix computed from GK.' }, 
        
{ date: '23/10/2023', speaker: 'Filippo Colomo',affiliation: 'Florence', topic: 'Arctic curves of the four-vertex model', abstract: 'Under specific choices of fixed boundary conditions, and in a suitable scaling limit, various dimer and vertex models may exhibit peculiar thermodynamics behaviour, with the emergence of regions of order and disorder, sharply separated by a smooth curve, called arctic curve. We start by reviewing the state of the art in the field and illustrate some of its numerous connections with other branches of mathematics and physics, ranging from algebraic combinatorics to quantum quenches. In the second part, we focus on the four-vertex model with so-called boxed plane partitions boundary conditions, and determine the analytic expression of the corresponding arctic curve. The derivation is based on the exact evaluation of suitable correlation functions, discriminating spatial transition from order to disorder, in terms of the partition function of some discrete log-gas associated to Hahn polynomials. As a by-product, we also deduce that the arctic curve’s fluctuations are governed by the Tracy-Widom distribution.' },


{ date: '13/11/2023', speaker: 'Pablo Ferrari',affiliation: 'Buenos Aires', topic: 'Hidden Temperature in the KMP model', abstract: 'In the KMP model a positive energy  is associated with each site . When a Poisson clock rings at the bond with energies , those values are substituted by and , respectively, where  is a uniform random variable in . The energy at the boundary vertices   is always an exponential random variable with mean , the fixed boundary condition. We show that the stationary measure for the resulting Markov process is the distribution of a vector  with coordinates , where are iid exponential (1) random variables, the law of  is the invariant measure for an opinion model with the same boundary conditions, and  are independent. The result confirms a conjecture based on the large deviations of the model. The discrete derivative of the opinion model behaves as a neural spiking process, which is also analised. The hydrostatic limit shows that the empirical measure associated to the stationary distribution converges to the linear interpolation of the boundary values. Joint work with Anna de Masi and Davide Gabrielli.' },

{ date: '13/11/2023', speaker: 'Cristian Giardina',affiliation: 'Modena', topic: 'Exactly solvable models of energy transport: from micro to macro', abstract: 'n/a' },



{ date: '27/11/2023', speaker: 'Andrea Raimondo',affiliation: 'Bergamo', topic: 'ODE/IM correspondence for affine sl2 Gaudin models', abstract: 'Since the pioneering works of Dorey-Tateo and Bazhanov-Lukyanov-Zamolodchikov, it is known that the connection coefficients of certain 1-dimensional Schroedinger operators (with "monster potentials") satisfy the so called QQ-system for the quantum KdV model. This relation, which is known as "ODE/IM correspondence", has been subject of intense research in the last twenty years, and has been generalized to many other pairs of operators/quantum integrable models. After the work of Frenkel, the ODE/IM correspondece is expected to be an instance of the geometric Langlands correspondence. In the present talk I will first review the original ODE/IM correspodence, and then I will consider Schroedinger operators constructed starting from solutions to the affine sl2 Gaudin Bethe ansatz equations. These operators are different from the Schroedinger operators with monster potential, but their connection coefficients satisfy the same QQ-system. Time permitting, I describe the conjecture that the Q-functions obtained from the Gaudin Bethe equations coincide with the Q-functions of the Bazhanov-Lukyanov-Zamolodchikov operators with monster potential. The talk is based on a joint work with Davide Masoero and Evgeny Mukhin.' },



{ date: '04/12/2023', speaker: 'Chiara Paletta',affiliation: 'Ljubljana', topic: 'Hidden strong symmetries in a range 3 deformation of the Hubbard model' , abstract: 'We examine a spin chain representing an open quantum system governed by the Lindblad equation, with external driving acting in the bulk. This model corresponds to a new integrable range 3 elliptic deformation of the Hubbard model. We show the appearance of multiple nonequilibrium steady states (NESS): the system retains memory of the initial state, even though the well-known invariance under spin su(2) and charge su(2) transformations of the Hubbard Hamiltonian is broken. We motivate this phenomenon by the existence of hidden strong symmetries in the form of quasi-local operators. Based on the works 2301.01612 and 2305.01922 with M. de Leeuw, B. Pozsgay and E. Vernier.' },





        // Add more seminars as needed
    ];

   const seminarList = document.getElementById('seminar-list');

    seminars.forEach(seminar => {
        const listItem = document.createElement('li');
        const content = `
            <strong>${seminar.date} - ${seminar.speaker} (${seminar.affiliation})</strong><br>
             ${seminar.topic}
        `;
        listItem.innerHTML = content;
        seminarList.appendChild(listItem);
        
        const abstract = document.createElement('div');
        abstract.classList.add('tooltip');
        abstract.innerHTML = seminar.abstract;
        listItem.appendChild(abstract);

        // Add event listener for hover
        listItem.addEventListener('mouseover', function () {
            abstract.style.visibility = 'visible';
        });

        listItem.addEventListener('mouseout', function () {
            abstract.style.visibility = 'hidden';
        });

        
    });
});
