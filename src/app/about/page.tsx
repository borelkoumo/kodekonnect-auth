export default function About() {
  return (
    <div className="px-4 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-primary-gray text-center">
        About
      </h1>
      <div className="bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center flex-col">
          <p className="text-gray-700 mb-4">
            Kode Konnect connecte les futurs talents IT à des mentors
            expérimentés pour un accompagnement personnalisé.
          </p>
          <p className="text-gray-700 mb-4">
            Notre plateforme rend l’apprentissage pratique, interactif et adapté
            aux besoins du marché.
          </p>
          <p className="text-gray-700 mb-4">
            Nous construisons une communauté inclusive et collaborative pour
            préparer la génération tech de demain.
          </p>
          <ul className="text-gray-700 mb-4 space-y-2 md:self-start">
            <li>
              <a
                href="https://github.com/borelkoumo/kodekonnect-auth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary-red hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span className="ml-2">Github repository</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/kodekonnect.png"
            alt="Kodekonnect logo"
            className="h-80 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
