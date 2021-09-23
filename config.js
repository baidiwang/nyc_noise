var config = {
  style: 'mapbox://styles/baidiwang/cktdl24fg1fmd19pj8xarniuo',
  accessToken: 'pk.eyJ1IjoiYmFpZGl3YW5nIiwiYSI6ImNrZWM1eHZkaTBmcDcycm85ZnMyMW84ZzcifQ.goF7JGXh_xYCXmyFjyc5_w',
  showMarkers: false,
  theme: 'light',
  title: '',
  subtitle: '',
  byline: '',
  footer: '',

  chapters: [

    {
      id: 'Chart',
      location: {
        center: [-73.91861, 40.76685],
        zoom: 9.5,
        pitch: 60.0000,
        bearing: 24.9436
      },  
      onChapterEnter: [
        {
          layer: 'NYC',
          opacity: 0.3
        }
      ],
      onChapterExit: [
        {
          layer: 'NYC',
          opacity: 0
        }
      ]
    },
    
    {
      id: 'NYC',
      alignment: 'right',
      title: 'The Loudest Neighborhoods In New York City',
      image: '',
      description: 'NYC is regarded as a city that never sleeps, which is not really a bonus for anyone who is genuinely attempting to get some rest. If you are one of those fortunate people who can afford to stay in a sky-high luxury apartment, far from all the chaos of the streets, then you can thank your lucky stars. And for the typical New Yorker, who sometimes needs to surrender to personal space only to stay in a busy Manhattan neighborhood, noise may be a major put off. Acccroding to a report from Rent Own Sell, I made a map below showing the top four noisiest neighborhood in New York.',
      location: {
        center: [-73.91845, 40.73505],
        zoom: 9.9905,
        pitch: 45.0000,
        bearing: 0.0000
      },
      
      onChapterEnter: [
        {
          layer: 'NYC',
          opacity: 0.3
        }
      ],
      onChapterExit: [
        {
          layer: 'NYC',
          opacity: 0
        }
      ]
    },

    {
      id: 'Brooklyn',
      alignment: 'right',
      title: 'Downtown Brooklyn',
      image: '',
      description: 'Brooklyn claims to be the loudest neighborhood in NYC in terms of the total number of noise violations lodged between January 2019 and February 2020. The loudest community in Brooklyn is the DUMBO/Downtown Brooklyn region accompanied by Bushwick South. The largest noise-related problem for Brooklyners appears to fall under the ‘Loud Music/Party’ section, with 47,286 reports lodged since January 2019.',
      location: {
        center: [-73.98395, 40.69445],
        zoom: 13.61,
        pitch: 60.00,
        bearing: 40.38
      },
      onChapterEnter: [
        {
          layer: 'downtown-brooklyn',
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: 'downtown-brooklyn',
          opacity: 0
        }
      ]
    },

    {
      id: 'Bronx',
      alignment: 'right',
      title: 'Bedford Park',
      image: '',
      description: 'The second-loudest neighborhood in New York City in the Bronx, with a record of 63,998 reports lodged since January 2019. The largest concern here is noise disturbance in the context of excessively loud music or parties because there are 39,679 grievances lodged under this section. Bedford Park/Fordham North is the loudest area of the Bronx further led by Norwood.',
      location: {
        center: [-73.88455, 40.87401],
        zoom: 13,
        pitch: 60.00,
        bearing: 17.79
      },
      onChapterEnter: [
        {
          layer: 'bedford-park',
          opacity: 0.5
         }
    ],
      onChapterExit: [
        {
          layer: 'bedford-park',
          opacity: 0
        }
      ]
    },

    {
      id: 'Manhattan',
      alignment: 'right',
      title: 'Hamilton Heights',
      image: '',
      description: 'In comparison to the Bronx or Brooklyn, Manhattan definitely happens to be a bit quieter. Almost 56,741 noise grievances were lodged in the district, 32,699 of them landing in the ‘Loud Music/Party’ section. Hamilton Heights is the loudest community in Manhattan followed by the Marble Hill/Inwood area.',
      location: {
        center: [-73.94944, 40.82702],
        zoom: 12.76,
        pitch: 60.00,
        bearing: 9.18
      },
      onChapterEnter: [
        {
          layer: 'hamilton-heights',
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: 'hamilton-heights',
          opacity: 0
        }
      ]
    },

    {
      id: 'Queens',
      alignment: 'right',
      title: 'Woodhaven',
      image: '',
      description: 'Queens seems to be less loud than Manhattan, and it seems to have reported 55,032 reports since January last year. A majority of all 311 reports fell into the categories of loud music and party noise. Woodhaven is the loudest Queens area backed by Queens bridge.',
      location: {
        center: [-73.85417, 40.69341],
        zoom: 11.75,
        pitch: 60.00,
        bearing: 31.20
      },
      onChapterEnter: [
        {
          layer: 'woodhaven',
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: 'woodhaven',
          opacity: 0
        }
      ]
    }
  ]
};
