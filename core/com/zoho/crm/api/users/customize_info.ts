import {Model} from "../../../../../../utils/util/model";

class CustomizeInfo implements Model{

	private notesDesc: boolean;
	private showRightPanel: string;
	private bcView: string;
	private showHome: boolean;
	private showDetailView: boolean;
	private unpinRecentItem: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the notesDesc
	 * @returns A boolean representing the notesDesc
	 */
	public getNotesDesc(): boolean	{
		return this.notesDesc;

	}

	/**
	 * The method to set the value to notesDesc
	 * @param notesDesc A boolean representing the notesDesc
	 */
	public setNotesDesc(notesDesc: boolean): void	{
		this.notesDesc = notesDesc;
		this.keyModified.set("notes_desc", 1);

	}

	/**
	 * The method to get the showRightPanel
	 * @returns A string representing the showRightPanel
	 */
	public getShowRightPanel(): string	{
		return this.showRightPanel;

	}

	/**
	 * The method to set the value to showRightPanel
	 * @param showRightPanel A string representing the showRightPanel
	 */
	public setShowRightPanel(showRightPanel: string): void	{
		this.showRightPanel = showRightPanel;
		this.keyModified.set("show_right_panel", 1);

	}

	/**
	 * The method to get the bcView
	 * @returns A string representing the bcView
	 */
	public getBcView(): string	{
		return this.bcView;

	}

	/**
	 * The method to set the value to bcView
	 * @param bcView A string representing the bcView
	 */
	public setBcView(bcView: string): void	{
		this.bcView = bcView;
		this.keyModified.set("bc_view", 1);

	}

	/**
	 * The method to get the showHome
	 * @returns A boolean representing the showHome
	 */
	public getShowHome(): boolean	{
		return this.showHome;

	}

	/**
	 * The method to set the value to showHome
	 * @param showHome A boolean representing the showHome
	 */
	public setShowHome(showHome: boolean): void	{
		this.showHome = showHome;
		this.keyModified.set("show_home", 1);

	}

	/**
	 * The method to get the showDetailView
	 * @returns A boolean representing the showDetailView
	 */
	public getShowDetailView(): boolean	{
		return this.showDetailView;

	}

	/**
	 * The method to set the value to showDetailView
	 * @param showDetailView A boolean representing the showDetailView
	 */
	public setShowDetailView(showDetailView: boolean): void	{
		this.showDetailView = showDetailView;
		this.keyModified.set("show_detail_view", 1);

	}

	/**
	 * The method to get the unpinRecentItem
	 * @returns A string representing the unpinRecentItem
	 */
	public getUnpinRecentItem(): string	{
		return this.unpinRecentItem;

	}

	/**
	 * The method to set the value to unpinRecentItem
	 * @param unpinRecentItem A string representing the unpinRecentItem
	 */
	public setUnpinRecentItem(unpinRecentItem: string): void	{
		this.unpinRecentItem = unpinRecentItem;
		this.keyModified.set("unpin_recent_item", 1);

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
	CustomizeInfo as MasterModel,
	CustomizeInfo as CustomizeInfo
}
