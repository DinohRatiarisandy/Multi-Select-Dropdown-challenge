type ClickOutsideHandler = () => void; // Alias pour le type de la fonction de rappel

export function clickOutside(element: HTMLElement, callbackFunction: ClickOutsideHandler) {
    // Fonction pour gérer les clics en dehors de l'élément spécifié
    function handleOutsideClick(event: MouseEvent) {
        const clickedElement = event.target as HTMLElement;

        // Vérifie si l'élément cliqué n'est ni #dropdown ni #selecte ni des classes svg ni l'élément spécifié
        if (!clickedElement.matches('#dropdown') &&
            !clickedElement.matches('#select') &&
            !clickedElement.matches('.svg') &&
            !element.contains(clickedElement)
        ) {
            callbackFunction();
        }
    }

    // Ajoute un écouteur d'événements de clic sur le corps du document
    document.body.addEventListener('click', handleOutsideClick);

    // Retourne un objet avec deux méthodes : update et destroy
    return {
        // Méthode pour mettre à jour la fonction de rappel
        update(newCallbackFunction: ClickOutsideHandler): void {
            callbackFunction = newCallbackFunction;
        },
        // Méthode pour supprimer l'écouteur d'événements
        destroy(): void {
            document.body.removeEventListener('click', handleOutsideClick);
        }
    };
}
