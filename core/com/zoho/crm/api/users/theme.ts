import {TabTheme} from "./tab_theme";
import {Model} from "../../../../../../utils/util/model";

class Theme implements Model{

	private normalTab: TabTheme;
	private selectedTab: TabTheme;
	private newBackground: string;
	private background: string;
	private screen: string;
	private type: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the normalTab
	 * @returns An instance of TabTheme
	 */
	public getNormalTab(): TabTheme	{
		return this.normalTab;

	}

	/**
	 * The method to set the value to normalTab
	 * @param normalTab An instance of TabTheme
	 */
	public setNormalTab(normalTab: TabTheme): void	{
		this.normalTab = normalTab;
		this.keyModified.set("normal_tab", 1);

	}

	/**
	 * The method to get the selectedTab
	 * @returns An instance of TabTheme
	 */
	public getSelectedTab(): TabTheme	{
		return this.selectedTab;

	}

	/**
	 * The method to set the value to selectedTab
	 * @param selectedTab An instance of TabTheme
	 */
	public setSelectedTab(selectedTab: TabTheme): void	{
		this.selectedTab = selectedTab;
		this.keyModified.set("selected_tab", 1);

	}

	/**
	 * The method to get the newBackground
	 * @returns A string representing the newBackground
	 */
	public getNewBackground(): string	{
		return this.newBackground;

	}

	/**
	 * The method to set the value to newBackground
	 * @param newBackground A string representing the newBackground
	 */
	public setNewBackground(newBackground: string): void	{
		this.newBackground = newBackground;
		this.keyModified.set("new_background", 1);

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
	 * The method to get the screen
	 * @returns A string representing the screen
	 */
	public getScreen(): string	{
		return this.screen;

	}

	/**
	 * The method to set the value to screen
	 * @param screen A string representing the screen
	 */
	public setScreen(screen: string): void	{
		this.screen = screen;
		this.keyModified.set("screen", 1);

	}

	/**
	 * The method to get the type
	 * @returns A string representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A string representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("type", 1);

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
	Theme as MasterModel,
	Theme as Theme
}
