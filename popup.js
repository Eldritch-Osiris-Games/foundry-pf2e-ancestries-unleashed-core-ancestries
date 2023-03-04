function registerSettings() {
	// Create the setting for disabling/re-enabling the popup.
	game.settings.register("foundry-pf2e-ancestries-unleashed-core-ancestries", "popupVis", {
		name: "One-Time Popup",
		scope: "client",
		hint: "Renables the popup displayed when the module was first activated, will force a reload to immediately present the pop up, useful if you need to retrive the bug report URL ",
		requiresReload: true,
		config: true,
		type: Boolean,
		default: true
})
};

Hooks.once("init", () => {
	//Wait until the game is initialized, then register the settings created previously.
	registerSettings();
});

Hooks.once('ready', async function () {
    if (game.user.isGM) {
        if (game.settings.get("foundry-pf2e-ancestries-unleashed-core-ancestries", "popupVis") == true) {
            let d = new Dialog({
                title: "Ancestries Unleashed Activated",

                content: `
                <p>
								Thank you for purchasing Ancestries Unleashed - Core Ancestry Options by Luis Loza & James Beck.
								</p>
								<p>
								Please report any bugs <a href="https://github.com/Eldritch-Osiris-Games/foundry-pf2e-ancestries-unleashed-core-ancestries/issues">here!</a>
								</p>
                `,
                buttons: {
                    one: {
                        icon: '<i class="fas fa-times-circle"></i>',
                        label: "Close",
                        callback: () => game.settings.set("foundry-pf2e-vaulted-weapon-masters", "popupVis", false)
                    },
                },
            },{ width: 450});
            d.render(true);
        }
    }
})