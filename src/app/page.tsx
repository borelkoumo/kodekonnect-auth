import {
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
} from '@heroicons/react/20/solid';

export default function Home() {
  return (
    <div className="px-4 py-12 max-w-6xl mx-auto flex flex-col items-center gap-8">
      <h1 className="text-3xl font-extrabold text-primary-gray text-center md:text-4xl">
        Apprenez, connectez, évoluez!
      </h1>
      <img
        src="/kodekonnect-main.jpg"
        alt="Kodekonnect in classroom"
        className="max-h-96 w-full object-cover shadow-2xl border border-amber-100"
      />
      <div className="flex flex-col justify-between items-stretch gap-8 h-2xl md:flex-row">
        <div className="flex flex-col justify-start items-center gap-8 bg-amber-200 px-8 py-8 shadow-lg">
          <AcademicCapIcon className="w-16 h-16 text-amber-600" />
          <h2 className="text-center text-xl font-bold text-red-800">
            Un mentor pour chaque étape
          </h2>
          <p className="font-light text-center">
            Accédez à un accompagnement personnalisé, adapté à vos objectifs
            dans l’IT.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center gap-8 bg-green-200 px-8 py-8 shadow-lg">
          <ClipboardDocumentListIcon className="w-16 h-16 text-green-600" />
          <h2 className="text-center text-xl font-bold text-red-800">
            Des ressources pratiques
          </h2>
          <p className="font-light text-center">
            Trouvez conseils, exercices et retours d’expérience pour progresser
            rapidement.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center gap-8 bg-blue-200 px-8 py-8 shadow-lg">
          <UsersIcon className="w-16 h-16 text-blue-600" />
          <h2 className="text-center text-xl font-bold text-red-800">
            Une communauté engagée
          </h2>
          <p className="font-light text-center">
            Échangez avec d’autres apprenants et mentors pour avancer ensemble.
          </p>
        </div>
      </div>
    </div>
  );
}

/*

Trois blocs de texte (présentés en grille 1x3)

Un mentor pour chaque étape
Accédez à un accompagnement personnalisé, adapté à vos objectifs dans l’IT.

Des ressources pratiques
Trouvez conseils, exercices et retours d’expérience pour progresser rapidement.

Une communauté engagée
Échangez avec d’autres apprenants et mentors pour avancer ensemble.

*/
