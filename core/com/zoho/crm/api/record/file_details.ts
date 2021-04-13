import {Model} from "../../../../../../utils/util/model";

class FileDetails implements Model{

	private extn: string;
	private isPreviewAvailable: boolean;
	private downloadUrl: string;
	private deleteUrl: string;
	private entityId: string;
	private mode: string;
	private originalSizeByte: string;
	private previewUrl: string;
	private fileName: string;
	private fileId: string;
	private attachmentId: string;
	private fileSize: string;
	private creatorId: string;
	private linkDocs: number;
	private delete1: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the extn
	 * @returns A string representing the extn
	 */
	public getExtn(): string	{
		return this.extn;

	}

	/**
	 * The method to set the value to extn
	 * @param extn A string representing the extn
	 */
	public setExtn(extn: string): void	{
		this.extn = extn;
		this.keyModified.set("extn", 1);

	}

	/**
	 * The method to get the isPreviewAvailable
	 * @returns A boolean representing the isPreviewAvailable
	 */
	public getIsPreviewAvailable(): boolean	{
		return this.isPreviewAvailable;

	}

	/**
	 * The method to set the value to isPreviewAvailable
	 * @param isPreviewAvailable A boolean representing the isPreviewAvailable
	 */
	public setIsPreviewAvailable(isPreviewAvailable: boolean): void	{
		this.isPreviewAvailable = isPreviewAvailable;
		this.keyModified.set("is_Preview_Available", 1);

	}

	/**
	 * The method to get the downloadUrl
	 * @returns A string representing the downloadUrl
	 */
	public getDownloadUrl(): string	{
		return this.downloadUrl;

	}

	/**
	 * The method to set the value to downloadUrl
	 * @param downloadUrl A string representing the downloadUrl
	 */
	public setDownloadUrl(downloadUrl: string): void	{
		this.downloadUrl = downloadUrl;
		this.keyModified.set("download_Url", 1);

	}

	/**
	 * The method to get the deleteUrl
	 * @returns A string representing the deleteUrl
	 */
	public getDeleteUrl(): string	{
		return this.deleteUrl;

	}

	/**
	 * The method to set the value to deleteUrl
	 * @param deleteUrl A string representing the deleteUrl
	 */
	public setDeleteUrl(deleteUrl: string): void	{
		this.deleteUrl = deleteUrl;
		this.keyModified.set("delete_Url", 1);

	}

	/**
	 * The method to get the entityId
	 * @returns A string representing the entityId
	 */
	public getEntityId(): string	{
		return this.entityId;

	}

	/**
	 * The method to set the value to entityId
	 * @param entityId A string representing the entityId
	 */
	public setEntityId(entityId: string): void	{
		this.entityId = entityId;
		this.keyModified.set("entity_Id", 1);

	}

	/**
	 * The method to get the mode
	 * @returns A string representing the mode
	 */
	public getMode(): string	{
		return this.mode;

	}

	/**
	 * The method to set the value to mode
	 * @param mode A string representing the mode
	 */
	public setMode(mode: string): void	{
		this.mode = mode;
		this.keyModified.set("mode", 1);

	}

	/**
	 * The method to get the originalSizeByte
	 * @returns A string representing the originalSizeByte
	 */
	public getOriginalSizeByte(): string	{
		return this.originalSizeByte;

	}

	/**
	 * The method to set the value to originalSizeByte
	 * @param originalSizeByte A string representing the originalSizeByte
	 */
	public setOriginalSizeByte(originalSizeByte: string): void	{
		this.originalSizeByte = originalSizeByte;
		this.keyModified.set("original_Size_Byte", 1);

	}

	/**
	 * The method to get the previewUrl
	 * @returns A string representing the previewUrl
	 */
	public getPreviewUrl(): string	{
		return this.previewUrl;

	}

	/**
	 * The method to set the value to previewUrl
	 * @param previewUrl A string representing the previewUrl
	 */
	public setPreviewUrl(previewUrl: string): void	{
		this.previewUrl = previewUrl;
		this.keyModified.set("preview_Url", 1);

	}

	/**
	 * The method to get the fileName
	 * @returns A string representing the fileName
	 */
	public getFileName(): string	{
		return this.fileName;

	}

	/**
	 * The method to set the value to fileName
	 * @param fileName A string representing the fileName
	 */
	public setFileName(fileName: string): void	{
		this.fileName = fileName;
		this.keyModified.set("file_Name", 1);

	}

	/**
	 * The method to get the fileId
	 * @returns A string representing the fileId
	 */
	public getFileId(): string	{
		return this.fileId;

	}

	/**
	 * The method to set the value to fileId
	 * @param fileId A string representing the fileId
	 */
	public setFileId(fileId: string): void	{
		this.fileId = fileId;
		this.keyModified.set("file_Id", 1);

	}

	/**
	 * The method to get the attachmentId
	 * @returns A string representing the attachmentId
	 */
	public getAttachmentId(): string	{
		return this.attachmentId;

	}

	/**
	 * The method to set the value to attachmentId
	 * @param attachmentId A string representing the attachmentId
	 */
	public setAttachmentId(attachmentId: string): void	{
		this.attachmentId = attachmentId;
		this.keyModified.set("attachment_Id", 1);

	}

	/**
	 * The method to get the fileSize
	 * @returns A string representing the fileSize
	 */
	public getFileSize(): string	{
		return this.fileSize;

	}

	/**
	 * The method to set the value to fileSize
	 * @param fileSize A string representing the fileSize
	 */
	public setFileSize(fileSize: string): void	{
		this.fileSize = fileSize;
		this.keyModified.set("file_Size", 1);

	}

	/**
	 * The method to get the creatorId
	 * @returns A string representing the creatorId
	 */
	public getCreatorId(): string	{
		return this.creatorId;

	}

	/**
	 * The method to set the value to creatorId
	 * @param creatorId A string representing the creatorId
	 */
	public setCreatorId(creatorId: string): void	{
		this.creatorId = creatorId;
		this.keyModified.set("creator_Id", 1);

	}

	/**
	 * The method to get the linkDocs
	 * @returns A number representing the linkDocs
	 */
	public getLinkDocs(): number	{
		return this.linkDocs;

	}

	/**
	 * The method to set the value to linkDocs
	 * @param linkDocs A number representing the linkDocs
	 */
	public setLinkDocs(linkDocs: number): void	{
		this.linkDocs = linkDocs;
		this.keyModified.set("link_Docs", 1);

	}

	/**
	 * The method to get the delete
	 * @returns A string representing the delete1
	 */
	public getDelete(): string	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param delete1 A string representing the delete1
	 */
	public setDelete(delete1: string): void	{
		this.delete1 = delete1;
		this.keyModified.set("_delete", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param key A string representing the key
	 * @returns A number representing the modification
	 */
	public isKeyModified(key: string): number | null | undefined	{
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param key A string representing the key
	 * @param modification A number representing the modification
	 */
	public setKeyModified(key: string, modification: number): void	{
		this.keyModified.set(key, modification);

	}

}
export {
	FileDetails as MasterModel,
	FileDetails as FileDetails
}
