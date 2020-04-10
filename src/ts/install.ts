import { BeforeInstallPromptEvent, UserChoice } from './models/before-install-promp';

const installButton: HTMLElement = document.querySelector('.install-btn');
let deferredInstallPrompt: BeforeInstallPromptEvent | null = null;

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
installButton.addEventListener('click', installPWA);

function installPWA(event: Event): void {
  const srcElement: HTMLElement = event.srcElement as HTMLElement;
  // Add code show install prompt & hide the install button.
  deferredInstallPrompt.prompt();
  // Hide the install button, it can't be called twice.
  srcElement.classList.add('hidden');
  // Log user response to prompt.
  deferredInstallPrompt.userChoice.then((choice: UserChoice) => {
    if (choice.outcome === 'accepted') {
      console.log('User accepted the install prompt', choice);
    } else {
      srcElement.classList.remove('hidden');
      console.log('User dismissed the install prompt', choice);
    }
    deferredInstallPrompt = null;
  });
}

function saveBeforeInstallPromptEvent(event: BeforeInstallPromptEvent): void {
  // Add code to save event & show the install button.
  deferredInstallPrompt = event;
  installButton.classList.remove('hidden');
}
