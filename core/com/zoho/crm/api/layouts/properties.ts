import {ToolTip} from "../fields/tool_tip";
import {Model} from "../../../../../../utils/util/model";

class Properties implements Model{

	private reorderRows: boolean;
	private tooltip: ToolTip;
	private maximumRows: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the reorderRows
	 * @returns A boolean representing the reorderRows
	 */
	public getReorderRows(): boolean	{
		return this.reorderRows;

	}

	/**
	 * The method to set the value to reorderRows
	 * @param reorderRows A boolean representing the reorderRows
	 */
	public setReorderRows(reorderRows: boolean): void	{
		this.reorderRows = reorderRows;
		this.keyModified.set("reorder_rows", 1);

	}

	/**
	 * The method to get the tooltip
	 * @returns An instance of ToolTip
	 */
	public getTooltip(): ToolTip	{
		return this.tooltip;

	}

	/**
	 * The method to set the value to tooltip
	 * @param tooltip An instance of ToolTip
	 */
	public setTooltip(tooltip: ToolTip): void	{
		this.tooltip = tooltip;
		this.keyModified.set("tooltip", 1);

	}

	/**
	 * The method to get the maximumRows
	 * @returns A number representing the maximumRows
	 */
	public getMaximumRows(): number	{
		return this.maximumRows;

	}

	/**
	 * The method to set the value to maximumRows
	 * @param maximumRows A number representing the maximumRows
	 */
	public setMaximumRows(maximumRows: number): void	{
		this.maximumRows = maximumRows;
		this.keyModified.set("maximum_rows", 1);

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
	Properties as MasterModel,
	Properties as Properties
}
