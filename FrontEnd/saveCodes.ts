class UploadModal {
  filename = '';
  isCopying = false;
  isUploading = false;
  progress = 0;
  progressTimeout: NodeJS.Timeout | null = null;
  state = 0;

  constructor(el: string) {
    const element = document.querySelector(el);
    element?.addEventListener('click', this.action.bind(this));
    element?.querySelector('#file')?.addEventListener('change', this.fileHandle.bind(this));
  }

  action(e: Event) {
    const target = e.target as HTMLElement | null;
    const action = target?.getAttribute('data-action');
    if (action) {
      (this as any)[action]();
      this.stateDisplay();
    }
  }

  cancel() {
    this.isUploading = false;
    this.progress = 0;
    if (this.progressTimeout) clearTimeout(this.progressTimeout);
    this.progressTimeout = null;
    this.state = 0;
    this.stateDisplay();
    this.fileReset();
  }

  async copy() {
    const copyButton = this.el?.querySelector("[data-action='copy']") as HTMLElement | null;

    if (!this.isCopying && copyButton) {
      // disable
      this.isCopying = true;
      copyButton.style.width = `${copyButton.offsetWidth}px`;
      copyButton.disabled = true;
      copyButton.textContent = 'Copied!';
      navigator.clipboard.writeText(this.filename);
      await new Promise((res) => setTimeout(res, 1000));
      // reenable
      this.isCopying = false;
      copyButton.removeAttribute('style');
      copyButton.disabled = false;
      copyButton.textContent = 'Copy Link';
    }
  }

  fail() {
    this.isUploading = false;
    this.progress = 0;
    if (this.progressTimeout) clearTimeout(this.progressTimeout);
    this.progressTimeout = null;
    this.state = 2;
    this.stateDisplay();
  }

  file() {
    const fileInput = this.el?.querySelector('#file') as HTMLInputElement | null;
    if (fileInput) fileInput.click();
  }

  async fileDisplay(name = '') {
    // update the name
    this.filename = name;

    const fileValue = this.el?.querySelector('[data-file]');
    if (fileValue) fileValue.textContent = this.filename;

    // show the file
    this.el?.setAttribute('data-ready', this.filename ? 'true' : 'false');
  }

  async fileHandle(e: Event) {
    const target = e.target as HTMLInputElement | null;
    return new Promise<void>(() => {
      if (target?.files?.length) {
        const reader = new FileReader();
        reader.onload = (e2) => {
          this.fileDisplay(target.files[0].name);
        };
        reader.readAsDataURL(target.files[0]);
      }
    });
  }

  fileReset() {
    const fileField = this.el?.querySelector('#file') as HTMLInputElement | null;
    if (fileField) fileField.value = '';

    this.fileDisplay();
  }

  progressDisplay() {
    const progressValue = this.el?.querySelector('[data-progress-value]');
    const progressFill = this.el?.querySelector('[data-progress-fill]');
    const progressTimes100 = Math.floor(this.progress * 100);

    if (progressValue) progressValue.textContent = `${progressTimes100}%`;
    if (progressFill) progressFill.style.transform = `translateX(${progressTimes100}%)`;
  }

  async progressLoop() {
    this.progressDisplay();

    if (this.isUploading) {
      if (this.progress === 0) {
        await new Promise((res) => setTimeout(res, 1000));
        // fail randomly
        if (!this.isUploading) {
          return;
        } else if (Utils.randomInt(0, 2) === 0) {
          this.fail();
          return;
        }
      }
      // …or continue with progress
      if (this.progress < 1) {
        this.progress += 0.01;
        this.progressTimeout = setTimeout(this.progressLoop.bind(this), 50);
      } else if (this.progress >= 1) {
        this.progressTimeout = setTimeout(() => {
          if (this.isUploading) {
            this.success();
            this.stateDisplay();
            this.progressTimeout = null;
          }
        }, 250);
      }
    }
  }

  stateDisplay() {
    this.el?.setAttribute('data-state', `${this.state}`);
  }

  success() {
    this.isUploading = false;
    this.state = 3;
    this.stateDisplay();
  }

  upload() {
    if (!this.isUploading) {
      this.isUploading = true;
      this.progress = 0;
      this.state = 1;
      this.progressLoop();
    }
  }
}

class Utils {
  static randomInt(min = 0, max = 2 ** 32) {
    const percent = crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
    const relativeValue = (max - min) * percent;
    return Math.round(min + relativeValue);
  }
}

function UploadModalComponent() {
  React.useEffect(() => {
    const upload = new UploadModal('#upload');
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return <div className="upload-container"></div>;
}

export default UploadModalComponent;