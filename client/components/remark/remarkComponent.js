/**
 * @class RemarkComponent
 * @property <Object {pRemarkId: string, txtRemarkId: string, btnEditRemarkId: string, btnSaveRemarkId: string}> childElementIds
 * @property <Element> element
 * @property <Element> dateCreateSpan
 * @property <Element> pRemarkElement
 * @property <Element> txtRemarkElement
 * @property <Element> btnEditRemarkElement
 * @property <Element> btnSaveRemarkElement

 */
class RemarkComponent {
    constructor(remark) {
        this.childElementIds = this.generateRemarkElementIds(remark);
        this.element = this.generateRemarkElement(remark, this.childElementIds);
    }

    /**
     * @param <Remark> remark
     * @returns <Object {pRemarkId: string, txtRemarkId: string, btnEditRemarkId: string, btnSaveRemarkId: string}>
     */
    generateRemarkElementIds(remark) {
        const childElementIds = {};
        const standardElementId = `${remark.id}-${remark.landMarkId}`;
        childElementIds.pRemarkId = `pRemark-${standardElementId}`;
        childElementIds.txtRemarkId = `txtRemark-${standardElementId}`;
        childElementIds.btnEditRemarkId = `btnEditRemark-${standardElementId}`;
        childElementIds.btnSaveRemarkId = `btnSaveRemark-${standardElementId}`;
        return childElementIds;
    };

    /**
     * @param <Remark> remark
     * @param <Object {pRemarkId: string, txtRemarkId: string, btnEditRemarkId: string, btnSaveRemarkId: string}>
     * @param <Element>
     */
    generateRemarkElement(remark, childElementIds) {
        const remarkFragment = document.createDocumentFragment();
        const remarkElement = document.createElement("article");
        remarkElement.setAttribute('data-remark-id', remark.id);
        remarkElement.classList.add('remark-component');
        this.dateCreateSpan = document.createElement("span");
        this.dateCreateSpan.textContent = remark.dateMade;

        this.pRemarkElement = document.createElement("p");
        this.pRemarkElement.setAttribute('id', childElementIds.pRemarkId);
        this.pRemarkElement.textContent = remark.text;

        this.txtRemarkElement = document.createElement("textarea");
        this.txtRemarkElement.setAttribute('id', childElementIds.txtRemarkId);
        this.txtRemarkElement.classList.add('hide');
        this.txtRemarkElement.textContent = remark.text;

        this.btnEditRemarkElement = document.createElement("button");
        this.btnEditRemarkElement.setAttribute('id', childElementIds.btnEditRemarkId);
        this.btnEditRemarkElement.innerHTML = "Edit";

        this.btnSaveRemarkElement = document.createElement("button");
        this.btnSaveRemarkElement.setAttribute('id', childElementIds.btnSaveRemarkId);
        this.btnSaveRemarkElement.classList.add('hide');
        this.btnSaveRemarkElement.innerHTML = "Save";

        remarkFragment.appendChild(this.dateCreateSpan);
        remarkFragment.appendChild(this.pRemarkElement);
        remarkFragment.appendChild(this.txtRemarkElement);
        remarkFragment.appendChild(this.btnEditRemarkElement);
        remarkFragment.appendChild(this.btnSaveRemarkElement);
        remarkElement.appendChild(remarkFragment);
        return remarkElement;
    };
    setSaveMode()
    {
        this.pRemarkElement.classList.add('hide');
        this.btnEditRemarkElement.classList.add('hide');
        this.txtRemarkElement.classList.remove('hide');
        this.btnSaveRemarkElement.classList.remove('hide');
    }
    setDisplayMode()
    {
        this.txtRemarkElement.classList.add('hide');
        this.btnSaveRemarkElement.classList.add('hide');
        this.pRemarkElement.classList.remove('hide');
        this.btnEditRemarkElement.classList.remove('hide');
    }
}

export default RemarkComponent;