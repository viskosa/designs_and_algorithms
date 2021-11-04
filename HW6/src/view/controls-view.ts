export default class ControlsView {
  getForm(formName: string) {
    return document.getElementById(formName);
  }

  getCurrentMode(formName: string) {
    const form = this.getForm(formName);
    return form?.querySelector("input[checked]")?.getAttribute("value")
  }

  setListener(formName: string, listener: string, handler: (event: any) => void) {
    const form = this.getForm(formName);
    form?.addEventListener(listener, handler);
  }
}