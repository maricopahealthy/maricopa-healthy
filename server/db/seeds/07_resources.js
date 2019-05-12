
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          thumbnail: "",
          name: "AZ Health Zone",
          teaser:
            "One sentence teaser goes here and is truncated if too long and doesn't fit.",
          phone_number: "602-555-1212",
          website: "https://www.azhealthzone.org/",
          description:
            "A description of the resource goes here to replace the following placeholder text. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. This summary might also include a bulleted list:;list item one;list item two;list item three;list item four;list item five;And some more description to follow the bullets. Incidunt arcu non sodales neque. Lectus mauris ultrices eros in cursus turpis massa. Scelerisque varius morbi enim nunc faucibus. Egestas sed tempus urna et pharetra pharetra. Purus sit amet volutpat consequat mauris."
        },
        {
          thumbnail: "",
          name: "Woman, Infants and Children (WIC)",
          teaser:
            "One sentence teaser goes here and is truncated if too long and doesn't fit.",
          phone_number: "602-555-1212",
          website:
            "https://www.maricopa.gov/1491/Women-Infants-Children-WIC",
          description:
            "A description of the resource goes here to replace the following placeholder text. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. This summary might also include a bulleted list:;list item one;list item two;list item three;list item four;list item five;And some more description to follow the bullets. Incidunt arcu non sodales neque. Lectus mauris ultrices eros in cursus turpis massa. Scelerisque varius morbi enim nunc faucibus. Egestas sed tempus urna et pharetra pharetra. Purus sit amet volutpat consequat mauris."
        },
        {
          thumbnail: "",
          name: "Find Help Phoenix",
          teaser:
            "One sentence teaser goes here and is truncated if too long and doesn't fit.",
          phone_number: "602-555-1212",
          website: "https://www.findhelpphx.org/",
          description:
            "A description of the resource goes here to replace the following placeholder text. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. This summary might also include a bulleted list:;list item one;list item two;list item three;list item four;list item five;And some more description to follow the bullets. Incidunt arcu non sodales neque. Lectus mauris ultrices eros in cursus turpis massa. Scelerisque varius morbi enim nunc faucibus. Egestas sed tempus urna et pharetra pharetra. Purus sit amet volutpat consequat mauris."
        },
        {
          thumbnail: "",
          name: "South Phoenix Healthy Start",
          teaser:
            "One sentence teaser goes here and is truncated if too long and doesn't fit.",
          phone_number: "602-555-1212",
          website: "https://www.maricopa.gov/4973/Healthy-Start",
          description:
            "A description of the resource goes here to replace the following placeholder text. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. This summary might also include a bulleted list:;list item one;list item two;list item three;list item four;list item five;And some more description to follow the bullets. Incidunt arcu non sodales neque. Lectus mauris ultrices eros in cursus turpis massa. Scelerisque varius morbi enim nunc faucibus. Egestas sed tempus urna et pharetra pharetra. Purus sit amet volutpat consequat mauris."
        },
        {
          thumbnail: "",
          name: "Flu and Immunization Clinics",
          teaser:
            "One sentence teaser goes here and is truncated if too long and doesn't fit.",
          phone_number: "602-555-1212",
          website: "https://www.maricopa.gov/2575/Clinics",
          description:
            "A description of the resource goes here to replace the following placeholder text. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. This summary might also include a bulleted list:;list item one;list item two;list item three;list item four;list item five;And some more description to follow the bullets. Incidunt arcu non sodales neque. Lectus mauris ultrices eros in cursus turpis massa. Scelerisque varius morbi enim nunc faucibus. Egestas sed tempus urna et pharetra pharetra. Purus sit amet volutpat consequat mauris."
        },
        {
          thumbnail: "",
          name: "AHCCCS",
          teaser:
            "One sentence teaser goes here and is truncated if too long and doesn't fit.",
          phone_number: "602-555-1212",
          website: "https://www.azahcccs.gov/",
          description:
            "A description of the resource goes here to replace the following placeholder text. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. This summary might also include a bulleted list:;list item one;list item two;list item three;list item four;list item five;And some more description to follow the bullets. Incidunt arcu non sodales neque. Lectus mauris ultrices eros in cursus turpis massa. Scelerisque varius morbi enim nunc faucibus. Egestas sed tempus urna et pharetra pharetra. Purus sit amet volutpat consequat mauris."
        },
        {
          thumbnail: "",
          name: "Safe Kids Maricopa County",
          teaser:
            "One sentence teaser goes here and is truncated if too long and doesn't fit.",
          phone_number: "602-555-1212",
          website: "https://www.safekidsmaricopaaz.org/",
          description:
            "A description of the resource goes here to replace the following placeholder text. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. This summary might also include a bulleted list:;list item one;list item two;list item three;list item four;list item five;And some more description to follow the bullets. Incidunt arcu non sodales neque. Lectus mauris ultrices eros in cursus turpis massa. Scelerisque varius morbi enim nunc faucibus. Egestas sed tempus urna et pharetra pharetra. Purus sit amet volutpat consequat mauris."
        },
        {
          thumbnail: "",
          name: "Native Health",
          teaser:
            "One sentence teaser goes here and is truncated if too long and doesn't fit.",
          phone_number: "602-555-1212",
          website: "https://www.nativehealthphoenix.org/",
          description:
            "A description of the resource goes here to replace the following placeholder text. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. This summary might also include a bulleted list:;list item one;list item two;list item three;list item four;list item five;And some more description to follow the bullets. Incidunt arcu non sodales neque. Lectus mauris ultrices eros in cursus turpis massa. Scelerisque varius morbi enim nunc faucibus. Egestas sed tempus urna et pharetra pharetra. Purus sit amet volutpat consequat mauris."
        },
        {
          thumbnail: "",
          name: "Neighborhood Outreach Access to Health (NOAH)",
          teaser:
            "One sentence teaser goes here and is truncated if too long and doesn't fit.",
          phone_number: "602-555-1212",
          website: "https://www.noahhelps.org/",
          description:
            "A description of the resource goes here to replace the following placeholder text. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. This summary might also include a bulleted list:;list item one;list item two;list item three;list item four;list item five;And some more description to follow the bullets. Incidunt arcu non sodales neque. Lectus mauris ultrices eros in cursus turpis massa. Scelerisque varius morbi enim nunc faucibus. Egestas sed tempus urna et pharetra pharetra. Purus sit amet volutpat consequat mauris."
        },
        {
          thumbnail: "",
          name: "Boys and Girls Clubs of Metro Phoenix",
          teaser:
            "One sentence teaser goes here and is truncated if too long and doesn't fit.",
          phone_number: "602-555-1212",
          website: "https://bgcmp.org/",
          description:
            "A description of the resource goes here to replace the following placeholder text. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. This summary might also include a bulleted list:;list item one;list item two;list item three;list item four;list item five;And some more description to follow the bullets. Incidunt arcu non sodales neque. Lectus mauris ultrices eros in cursus turpis massa. Scelerisque varius morbi enim nunc faucibus. Egestas sed tempus urna et pharetra pharetra. Purus sit amet volutpat consequat mauris."
        }
      ]);
    });
};
