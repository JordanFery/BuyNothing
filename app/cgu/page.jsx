export default function CGU() {
    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col items-center px-6 py-12">
            <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-10">
                <h1 className="text-4xl font-bold mb-6 text-center">Conditions Générales d'Utilisation</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">1. Présentation du site</h2>
                    <p>
                        Le site <strong>Buy Nothing</strong> (« le Site ») est édité par <strong>Jordan Fery</strong>,
                        situé à 29 rue Lassus 54760 Montenoy. Le Site propose la vente de produits symboliques, résolument abstraits et humoristiques,
                        consistant en… <strong>rien du tout</strong>.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">2. Description du produit</h2>
                    <p className="mb-2">
                        Chaque produit disponible sur le Site est :
                    </p>
                    <ul className="list-disc list-inside mb-2">
                        <li><strong>Totalement vide</strong> : aucun objet physique, aucun fichier numérique, aucune expérience tangible.</li>
                        <li><strong>Unique et luxueux</strong> : inspiré par l’art du vide et l’exclusivité ultime, chaque “rien” est présenté comme une œuvre symbolique.</li>
                        <li><strong>Certifié</strong> : un reçu Stripe est envoyé automatiquement à l’acheteur, attestant l’acquisition de ce produit abstrait.</li>
                    </ul>
                    <p className="italic">
                        En achetant, vous confirmez votre compréhension et votre acceptation que le produit ne contient absolument rien.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">3. Conditions de paiement</h2>
                    <ul className="list-disc list-inside">
                        <li>Les paiements sont effectués via Stripe.</li>
                        <li>Les prix sont indiqués en euro.</li>
                        <li><strong>Remboursement impossible</strong> : le produit ne peut être retourné ni échangé.</li>
                        <li>Les frais bancaires éventuels sont à la charge de l’acheteur.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">4. Responsabilités</h2>
                    <p>
                        L’acheteur assume l’entière responsabilité de son achat et de sa décision de payer pour un produit abstrait.
                        Le Site décline toute responsabilité en cas de mécontentement lié à l’absence de contenu.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">5. Propriété intellectuelle</h2>
                    <p>
                        Les noms, visuels et concepts présents sur le Site sont la propriété de <strong>Jordan Fery</strong>.
                        Toute reproduction sans autorisation est interdite.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">6. Données personnelles</h2>
                    <p>
                        Les informations personnelles collectées sont limitées aux données nécessaires au paiement et à l’envoi du reçu Stripe.
                        Aucune donnée supplémentaire n’est collectée sans consentement.
                    </p>
                    <p>Conformément à la législation sur la protection des données, vous pouvez demander l’accès ou la suppression de vos données en contactant <strong>jordan.fery.dev@gmail.com</strong>.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">7. Loi applicable</h2>
                    <p>
                        Les présentes conditions sont régies par le droit français.
                        Tout litige relatif à l’interprétation ou l’exécution des présentes CGU sera soumis à la compétence exclusive des tribunaux compétents.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">8. Acceptation des CGU</h2>
                    <p>
                        En cliquant sur “Acheter rien” et en procédant au paiement, vous reconnaissez avoir lu, compris et accepté l’intégralité de ces Conditions Générales d’Utilisation.
                    </p>
                </section>

                <div className="text-center mt-8">
                    <a
                        href="/"
                        className="inline-block px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-neutral-800 transition"
                    >
                        Retour à l'accueil
                    </a>
                </div>
            </div>
        </main>
    );
}
