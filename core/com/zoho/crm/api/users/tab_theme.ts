import {Model} from "../../../../../../utils/util/model";

class TabTheme implements Model{

	private fontColor: string;
	private background: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the fontColor
	 * @returns A string representing the fontColor
	 */
	public getFontColor(): string	{
		return this.fontColor;

	}

	/**
	 * The method to set the value to fontColor
	 * @param fontColor A string representing the fontColor
	 */
	public setFontColor(fontColor: string): void	{
		this.fontColor = fontColor;
		this.keyModified.set("font_color", 1);

	}

	/**
	 * The method to get the background
	 * @returns A string representing the background
	 */
	public getBackground(): string	{
		return this.background;

	}

	/**
	 * The method to set the value to background
	 * @param background A string representing the background
	 */
	public setBackground(background: string): void	{
		this.background = background;
		this.keyModified.set("background", 1);

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
	TabTheme as MasterModel,
	TabTheme as TabTheme
}
