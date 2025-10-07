import i18n from "../i18n";
import testImage from "../assets/color-1.png";

const t = i18n.t;

// Shared insulation-like products data to be used by Interior and Exterior pages as well
const insulationProducts = [
    {
        id: 1,
        name: t("thermal_bondmax_premium"),
        category: t("thermal_insulation"),
        image: testImage,
        description: t("thermal_bondmax_premium_desc"),
        features: [t("reduces_energy_consumption"), t("moisture_resistant"), t("easy_installation")],
    },
    {
        id: 2,
        name: t("sound_bondmax_excellent"),
        category: t("sound_insulation"),
        image: testImage,
        description: t("sound_bondmax_excellent_desc"),
        features: [t("excellent_sound_absorption"), t("lightweight"), t("durable_long_lasting")],
    },
    {
        id: 3,
        name: t("thermal_bondmax_villas"),
        category: t("thermal_insulation"),
        image: testImage,
        description: t("thermal_bondmax_villas_desc"),
        features: [t("advanced_insulation"), t("improves_energy_efficiency"), t("fire_resistant")],
    },
    {
        id: 4,
        name: t("sound_interior_rooms"),
        category: t("sound_insulation"),
        image: testImage,
        description: t("sound_interior_rooms_desc"),
        features: [t("noise_absorption"), t("light_easy_install"), t("no_ventilation_block")],
    },
];

export default insulationProducts;
