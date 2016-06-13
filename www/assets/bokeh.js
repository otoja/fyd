
    Bokeh.$(function() {
        var all_models = [{
            "attributes": {
                "plot": {
                    "subtype": "Figure",
                    "type": "Plot",
                    "id": "e6c4c346-72c9-4ec9-857a-53cc44704961"
                },
                "tags": [],
                "doc": null,
                "id": "abc3e048-f0ac-4ced-988f-74cc4e71cc7f"
            },
            "type": "ResetTool",
            "id": "abc3e048-f0ac-4ced-988f-74cc4e71cc7f"
        }, {
            "attributes": {
                "nonselection_glyph": {
                    "type": "Circle",
                    "id": "b15cb870-c2a9-45de-82df-2d40c13a09e3"
                },
                "data_source": {
                    "type": "ColumnDataSource",
                    "id": "4535fe45-ee2d-4a50-a752-df83cb485847"
                },
                "tags": [],
                "doc": null,
                "selection_glyph": null,
                "id": "fe954ad4-a1da-47cc-8f65-0fdab0b14a90",
                "glyph": {
                    "type": "Circle",
                    "id": "7da13c43-8591-4ecf-8457-8661874e391f"
                }
            },
            "type": "GlyphRenderer",
            "id": "fe954ad4-a1da-47cc-8f65-0fdab0b14a90"
        }, {
            "attributes": {
                "plot": {
                    "subtype": "Figure",
                    "type": "Plot",
                    "id": "e6c4c346-72c9-4ec9-857a-53cc44704961"
                },
                "tags": [],
                "doc": null,
                "axis_label": "Number of applications submitted",
                "formatter": {
                    "type": "BasicTickFormatter",
                    "id": "3af22de4-b0af-4423-9103-e53c134a7e0e"
                },
                "ticker": {
                    "type": "BasicTicker",
                    "id": "ea47ac64-86af-43fd-9e0f-e2aac04b7e5a"
                },
                "id": "5200eed6-e502-4123-8c31-ace7bf417248"
            },
            "type": "LinearAxis",
            "id": "5200eed6-e502-4123-8c31-ace7bf417248"
        }, {
            "attributes": {
                "geometries": [],
                "tags": [],
                "doc": null,
                "id": "35f8ca4c-beff-47bb-8ae0-2b9ff428571f"
            },
            "type": "ToolEvents",
            "id": "35f8ca4c-beff-47bb-8ae0-2b9ff428571f"
        }, {
            "attributes": {
                "line_color": {
                    "value": "blue"
                },
                "line_alpha": {
                    "value": 1.0
                },
                "fill_color": {
                    "value": "blue"
                },
                "tags": [],
                "doc": null,
                "fill_alpha": {
                    "value": 1.0
                },
                "y": {
                    "value": 26
                },
                "x": {
                    "value": 17
                },
                "id": "97fc5762-8866-43d7-a013-e08588fa9b1f",
                "size": {
                    "units": "screen",
                    "value": 10
                }
            },
            "type": "Circle",
            "id": "97fc5762-8866-43d7-a013-e08588fa9b1f"
        }, {
            "attributes": {
                "plot": {
                    "subtype": "Figure",
                    "type": "Plot",
                    "id": "e6c4c346-72c9-4ec9-857a-53cc44704961"
                },
                "tags": [],
                "doc": null,
                "dimension": 1,
                "ticker": {
                    "type": "BasicTicker",
                    "id": "ea47ac64-86af-43fd-9e0f-e2aac04b7e5a"
                },
                "id": "6f1c41bc-47fe-43b8-b5a9-0c8f3be92457"
            },
            "type": "Grid",
            "id": "6f1c41bc-47fe-43b8-b5a9-0c8f3be92457"
        }, {
            "attributes": {
                "line_color": {
                    "value": "#1f77b4"
                },
                "line_alpha": {
                    "value": 0.1
                },
                "fill_color": {
                    "value": "#1f77b4"
                },
                "tags": [],
                "doc": null,
                "fill_alpha": {
                    "value": 0.1
                },
                "y": {
                    "value": 26
                },
                "x": {
                    "value": 17
                },
                "id": "8f4206cf-b6d7-4ff0-80de-41012e9fae44",
                "size": {
                    "units": "screen",
                    "value": 10
                }
            },
            "type": "Circle",
            "id": "8f4206cf-b6d7-4ff0-80de-41012e9fae44"
        }, {
            "attributes": {
                "column_names": ["names_", "apps_", "months", "line_color", "fill_color"],
                "tags": [],
                "doc": null,
                "selected": {
                    "2d": {
                        "indices": []
                    },
                    "1d": {
                        "indices": []
                    },
                    "0d": {
                        "indices": [],
                        "flag": false
                    }
                },
                "callback": null,
                "data": {
                    "line_color": ["green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red"],
                    "names_": ["Gro Berntsen", "Jenny Mathisen", "Monica Moe", "\u00d8ystein-Mathias Iversen", "Thea Kristensen", "Maren Moen", "Joakim Christensen", "Ruth Nguyen", "Hilde Rasmussen", "Nora Pettersen", "Sverre Thorsen", "Egil-Kenneth Bakke", "Sigrid Jakobsen", "Heidi Eliassen", "Bente-Synn\u00f8ve Andresen", "Sigrid Ahmed", "Gunn Berge", "Simen Brekke", "Monica Bakke", "Siri-Turid Moen", "Gro Halvorsen", "Inger Nilsen", "Daniel Johannessen", "Sigrid Rasmussen", "Karoline Holm-Aas", "Martin-Daniel Ahmed", "Randi Aasen", "Kristian Andreassen", "Jenny Haugland", "Linda Andresen", "Sigurd Andresen", "Britt J\u00f8rgensen", "Einar Birkeland-Eriksen", "Gunn Strand", "John Lunde", "Marius Amundsen-Aune", "Kristine Lund", "Sander Eliassen", "Lise Ahmed", "Kristoffer Berge", "Julie Lunde", "Ragnhild Andreassen", "Johannes Ahmed", "Johannes-Erik Thomassen", "Wenche Abrahamsen", "Elin Haugland", "Sebastian S\u00e6ther", "Jens Isaksen", "Vegard-Kristian Tangen", "P\u00e5l Hagen", "Jorunn Lunde", "Martine Edvardsen", "Roger-Tommy Eide", "Inger-Tove Moen", "Tove Helland", "Anna Sivertsen", "Tor Lie", "Andrea Martinsen-Gulbrandsen", "Leif Larsen", "Joakim Madsen", "Alf Hansen", "Helene Larsen", "Tommy Evensen", "Marius Aune", "Prof. Sondre N\u00e6ss", "Kristin Eliassen", "Synn\u00f8ve-Synn\u00f8ve Birkeland", "Terje Christensen", "Mona Sandvik", "Roy Jacobsen", "Malin Andersen", "Markus Ali", "Heidi Bakken", "Thomas-Roy Larsen", "Finn Jensen", "Egil-Odd Nilsen", "Ragnhild Jakobsen", "Lene Madsen", "Gerd Hansen", "Jorunn Fredriksen-Tveit", "Vegard-Vidar Lund", "Ingeborg Sivertsen", "Anette Lien", "Camilla-Kristin Martinsen", "Johan Birkeland", "Magnus Lund", "Gunn Madsen", "Anita Aas", "Maren Pettersen", "Helene-Marianne Tveit", "Gerd-Anita Haug", "Synn\u00f8ve Simonsen", "Linn \u00f8deg\u00e5rd", "\u00d8yvind Sandvik-Brekke", "K\u00e5re Brekke-Tveit", "Mette-Siv Martinsen", "Astrid Danielsen", "Bente Helland", "Gerd Thorsen", "Frode Bakke", "J\u00f8rgen-Mathias Moen", "H\u00e5kon Thorsen-Helland", "Vidar Arnesen", "P\u00e5l Amundsen", "Dr. Rune Antonsen", "Sindre-Torbj\u00f8rn B\u00f8e", "Emma Simonsen", "Tove-Solveig Lien", "Tor Amundsen", "Steinar Antonsen", "Nina Solheim", "Else Moen", "H\u00e5vard Sandvik-Simonsen", "Sebastian Pedersen", "Karoline Mathisen", "Tommy Christensen", "Janne Helland", "Rita Knudsen-Strand", "Svein Haugen", "Trond-Sigurd Jenssen", "Sigurd Aasen", "Karen Evensen", "Tommy Nyg\u00e5rd", "Linda Andersen", "Morten Pedersen", "Sigurd Hansen", "Ruth Aas-Kristensen", "Grete-Gerd Iversen", "Terje Halvorsen", "Cathrine-Kristin Andreassen", "Sigrid-Stine Christensen", "Leif Myklebust", "Sindre Bakken-R\u00f8nning", "Leif Myhre", "Alf \u00f8deg\u00e5rd", "Stian Hagen", "Rune Jenssen", "Morten Lunde", "Marte Aune-Moe", "Marianne Martinsen", "Rune Kristoffersen", "Tobias Aune", "Einar Halvorsen-Ruud", "Jon-Leif Ahmed", "Hilde Gulbrandsen", "Tom Lien-Gundersen", "Ragnhild Myhre", "Ellen Hanssen", "Sissel-Emilie Solberg", "Jorunn Ahmed", "Lise Holm", "Anne Thomassen", "J\u00f8rgen Edvardsen", "Jenny Thomassen", "Kjetil Berge", "Elisabeth Jakobsen", "Sigrid Evensen", "Jon Rasmussen", "Thor Svendsen", "Liv Nyg\u00e5rd-Hansen", "Rita-Astrid Moen", "Karin Kristiansen-Eide", "Karl Andersen", "Tobias J\u00f8rgensen", "Ann Mikkelsen-Myklebust", "Petter Sandvik", "Randi Dahl", "Ingrid Moen", "Svein Holm", "Dr. Robert B\u00f8e", "Kari Paulsen", "K\u00e5re Haugen-Johannessen", "H\u00e5vard Abrahamsen-Berge", "Stian \u00f8deg\u00e5rd", "Erling-Andreas Jenssen", "Leif Moe", "Maren Myhre", "Emilie Aune-S\u00f8rensen", "Ivar Simonsen", "Maria Henriksen-Henriksen", "Dr. Harald Sivertsen", "Tommy Brekke", "Linn Vik", "Reidun-Laila Iversen", "Tone Johnsen", "Finn-Morten Johansen", "Sverre Berg", "Reidun Simonsen", "Kristine Holm", "Marius Eide-Abrahamsen", "Harald Knutsen", "Sara-Janne Ruud", "Sander Christensen-Iversen", "Karl-Magnus Tangen", "Jonas Nguyen-Lunde", "Mette Thomassen", "Reidun Sandvik", "Britt Martinsen", "Karoline-Anna Hauge", "Helge B\u00f8e", "Magne Ruud", "Olav Bakken", "Irene-Ida Christensen", "Nora Mathisen", "Simen Bakken", "Alexander-Kenneth J\u00f8rgensen", "Jonas-Jon Larsen", "Grete Thomassen", "Cecilie Abrahamsen", "Andrea-Bente Sandvik", "Janne Haugland", "Wenche Aune-Karlsen", "Grete Kristiansen", "Kristoffer Ellingsen", "Nina Solberg", "Helge-Frank S\u00f8rensen", "Britt Knudsen", "Harald Kristiansen", "Jonas Aas", "May-Kristine Simonsen", "Siv Madsen", "Markus Haug-Ellingsen", "Eva Str\u00f8m-Aune", "Torbj\u00f8rn R\u00f8nning", "Bj\u00f8rn Hanssen-Thorsen", "Tore-Torbj\u00f8rn Solheim", "Karin Hanssen", "John Thorsen", "Roy Johannessen", "Svein Haug", "Kristin Isaksen", "Julie Brekke", "Jonas-Svein Hanssen", "Trond Aas", "Martin Nyg\u00e5rd", "Ann Fredriksen", "Elisabeth Henriksen", "Tommy-Geir Solberg", "Jorunn Haug", "Grethe Svendsen", "Grete Solheim", "Prof. Einar Danielsen", "Kim Thorsen", "Bente Str\u00f8m", "Mari Solheim", "Odd Lien", "Kristine Aas", "Tore Thorsen", "Thor Moen", "Jorunn Lien", "Hanne Helland", "Asbj\u00f8rn Brekke", "Prof. Ole Nguyen", "Kenneth Johnsen", "Thor \u00f8deg\u00e5rd", "Torill Kristensen", "Elisabeth Danielsen", "Ann Jakobsen-Bakken", "Tore Olsen", "Sebastian Aas", "Prof. Tom Halvorsen", "Trond Engen", "Frank Fredriksen", "H\u00e5kon-Jonas Lunde", "Eivind J\u00f8rgensen", "Helge Andersen", "Hanne Simonsen", "Emma-Britt Arnesen", "Robert-Vidar Andresen", "Prof. Henrik Simonsen", "Tom Olsen", "Lars \u00f8deg\u00e5rd", "Ida Amundsen", "Reidun Johannessen", "Unni-Siri Knutsen", "Gro Thomassen", "Lene-Ruth Mikkelsen", "Vilde Bakke", "Ole Lunde", "Hege S\u00e6ther", "Line Kristoffersen", "Bj\u00f8rg R\u00f8nning", "Jens Halvorsen", "Dr. Erik Lund", "Malin Thorsen", "\u00c5se Haugen", "Harald Johannessen", "Kenneth Eriksen", "Petter-Thomas Ellingsen", "Adrian-Jan Gulbrandsen", "John-Magnus Sandvik", "Erik Amundsen", "Mari Johnsen", "Robert Hansen", "Marie-Malin Sandvik", "Thea Johnsen", "Thor Amundsen-Eriksen", "Karoline Madsen", "Stine Berg", "Prof. H\u00e5vard Jacobsen", "Vidar-Fredrik Lund", "Irene Haugen", "Svein Lie-Rasmussen", "Lise Helland", "Adrian Bakke-Sivertsen", "Lars Arnesen", "Eli Isaksen", "Stig Paulsen", "Ida Halvorsen", "Ole Lunde-Mikkelsen", "Jorunn Johannessen", "Adrian Moen", "Stein Andersen", "Emma Lien", "Grethe R\u00f8nning-Eliassen", "Dr. Joakim Holm", "Johan Engen", "Alf Knudsen", "Kristoffer Henriksen", "Hans S\u00f8rensen", "Svein-Roy Holm", "\u00d8yvind Ruud", "Ruth N\u00e6ss", "Nora Martinsen", "Frank Johannessen", "Johan Eliassen", "Prof. K\u00e5re Haug", "Sissel Helland", "Kjetil Strand", "Joakim Brekke-Solberg", "\u00d8yvind Kristiansen", "Hilde Arnesen", "Eirik Haugland", "Camilla Danielsen", "Ellen Str\u00f8m", "Erik Nilsen", "Kirsten Andersen", "Marte Myklebust-Madsen", "Jonas Solberg", "Ole J\u00f8rgensen", "Aud-Laila R\u00f8nning", "Marie-Camilla Halvorsen", "Karl Solberg-Christensen", "Stian-Jan Helland", "Dr. Kjetil Kristiansen", "Espen Engen", "Jenny Moe", "Markus-Magne S\u00e6ther", "Eivind Sivertsen", "Cathrine Pedersen", "Stine Sivertsen", "Elise Simonsen", "John Myklebust", "Anna Pettersen", "Helene Paulsen", "Synn\u00f8ve Pedersen", "Reidun-Ingeborg Thorsen", "Alexander S\u00e6ther", "Grethe Pettersen", "Kjetil Karlsen", "Bj\u00f8rg Mikkelsen", "Odd-Per Iversen", "Gunnar Myklebust", "Marie Ahmed", "Wenche Moe", "Monica-May Christensen", "Elise Nilsen", "Trond Thomassen-Johannessen", "Anette-Elise Nilsen", "Kjersti Mikkelsen", "Emil-Roy Haugen", "Terje Jenssen", "Steinar Edvardsen", "Eli Svendsen", "Alf Eide-Knudsen", "Helene-Lise Vik", "Rune Ahmed-Halvorsen", "Stein-\u00d8ystein Sivertsen", "Martin Isaksen", "Camilla Arnesen", "Bente S\u00f8rensen-Andersen", "Sissel Larsen", "Kristoffer Haugen", "Kristin Haug", "Cecilie Madsen", "Roy S\u00e6ther", "Knut Aas-Fredriksen", "Petter Knudsen", "Vilde S\u00f8rensen", "Kristine Nielsen", "Markus Jensen-Tangen", "Elin Jensen", "Gerd Eide", "Asbj\u00f8rn Strand", "Rolf Tangen", "Unni Str\u00f8m-Engen", "Prof. H\u00e5kon Nyg\u00e5rd", "Astrid Simonsen", "Simen-Gunnar Haugland", "Martin Nguyen"],
                    "apps_": [20.873831643498264, 20.0592390288002, 16.769753725552057, 18.977658537225953, 18.25628112864733, 20.653543316023395, 17.205694174683483, 20.932113934737664, 18.885515946038282, 18.502024912892274, 23.215571999794975, 14.565195799087785, 12.322510480767251, 17.87297460786134, 25.7986189645543, 23.14088377371399, 21.120185975214312, 21.28009596855471, 27.80006369532528, 24.827234006678076, 24.70427161365665, 20.43339656195917, 25.1759347687209, 14.34659621397542, 27.522009758060822, 30.173174862948738, 17.473509792127995, 17.15616092743821, 11.04070201214406, 19.816140775018564, 21.933991031986018, 26.152411114974782, 12.450322661102533, 20.085777788642766, 20.544523083258383, 17.677940131905608, 20.252895408460535, 21.704772523951274, 17.510973773644327, 16.72712740238193, 25.968742466370184, 18.068229586526375, 10.0907111749469, 21.045485958438665, 21.180162971527913, 9.137503863772448, 16.994135006305356, 23.743140376611365, 20.224664036195414, 27.867309982936995, 17.20139903885591, 18.5055534806199, 13.08028331672998, 5.186834394307342, 18.90045120570305, 25.35848955728503, 16.25080830491961, 16.798079181899794, 23.838616740364046, 16.3223670042155, 19.589466107703707, 27.36650244204047, 28.643551303319775, 20.582888868171874, 14.914983447443177, 26.88736591947195, 15.295225599416877, 9.383678641230876, 25.804045616874284, 27.308127016691117, 24.496523372622523, 15.708708341142463, 13.71975642915933, 13.784670734608914, 21.581742396440095, 18.76819191421547, 21.772074198748367, 14.46103187477443, 22.36014569052326, 15.863807287159748, 21.073904519564106, 19.062094123969143, 15.781386798675276, 14.131484574673037, 21.763128144324355, 26.00885046609999, 17.660353399459378, 24.4211639025663, 18.070806870328287, 15.743316305899238, 31.40071891743834, 24.145125293368004, 17.323593557430748, 19.499586167802256, 21.809416282579594, 19.845692259363283, 21.685691424147894, 18.32191798899321, 30.35816613125433, 19.175224116364276, 18.954672088717018, 21.925682440432993, 12.736639839822075, 20.35599560956261, 22.553737027385285, 20.943830160318992, 29.022044779216472, 23.689982570671734, 20.268086215160587, 21.45614047614499, 11.237055149358177, 32.34621564423058, 29.9370465869006, 15.931205648262274, 16.644978426665848, 14.033175475297181, 18.44242957918736, 3.9102188649322613, 26.899224509557715, 23.147264562001965, 22.866653042997925, 15.400358124433254, 6.02903093975349, 28.6288593211236, 12.320500655874017, 18.80539731888687, 18.03253748844466, 18.822283715072004, 24.95511841507048, 16.11282656157931, 19.03374209929083, 9.711174347128093, 15.454267478680109, 23.96387372004694, 21.726516163189107, 19.645282096876393, 25.983129344276335, 17.676212993702595, 14.135692708265626, 30.047901385777323, 10.535430967256291, 11.829122975242598, 11.415292168822189, 14.989587690299896, 21.60031308334313, 15.519615951692936, 23.16965923768734, 30.184550644737406, 25.780738969539943, 23.562657752592674, 26.947563192120047, 20.214356011959843, 22.957452043286114, 19.841499379254298, 8.206252958365546, 20.618279498130732, 23.9819208402334, 17.786017681474345, 12.271770523710831, 14.971047748822961, 17.00483840382544, 16.46065949872365, 19.30859321761438, 13.78410590375119, 24.13847490394125, 26.676127044821435, 24.532817667682743, 18.988503254484623, 23.69213469831795, 17.16981771251144, 15.543221154443286, 16.173380819140704, 11.55202102801309, 20.025228786863533, 15.553049532124062, 14.658161535321076, 22.278003107546933, 22.07292238576071, 23.55750971245574, 20.074205595171016, 12.666615569128922, 18.732912084342686, 20.853207866767548, 10.510072509045484, 24.480780408624224, 28.039649264895132, 15.803637956558042, 25.774146370853174, 23.39540470632896, 26.56401007742721, 20.6150411147242, 13.66426306419161, 11.287509726431837, 7.651627524742018, 22.20719509083414, 22.006200962931615, 25.5844892539212, 32.215001022599374, 14.853333347388705, 15.900309375463348, 16.471810207629925, 24.573222646303, 19.192192548338642, 18.48353893440594, 21.069846743958756, 26.327262452290803, 18.691052522592173, 14.035461363059513, 27.57880113441483, 29.18944781954923, 22.619270717726998, 26.97014803681501, 27.437421098194555, 14.79904642362348, 17.50007192934782, 23.602632037256996, 19.727174702466773, 16.907734636562466, 19.971233013231274, 22.368399929140214, 15.551437872711015, 11.323718489588096, 24.311607019292325, 24.12635028913107, 18.102507340704623, 27.43587275840688, 19.376333500743737, 15.8291706516091, 18.219128694103368, 13.152968953694533, 23.305418986251283, 14.647114507008123, 15.817760385692342, 28.05503220991163, 8.828811563444152, 19.695260029154404, 14.303790628148999, 7.809442631394612, 15.52400968943826, 18.82119495536872, 17.611339709949068, 17.525831654618283, 17.02880771246805, 26.55414934281067, 15.789773557648513, 13.192276421816238, 27.888242018291916, 18.763341938958334, 23.481082848456314, 29.852799703151252, 29.072150232633426, 19.200637270790406, 17.664083903803625, 13.627229032456071, 11.363858119981886, 14.621252763868462, 14.588405246078754, 22.87415014742284, 25.222012907150138, 17.072959068191523, 20.89590407195311, 26.65340834148615, 20.13955057391436, 20.90870695020659, 26.14104071099238, 18.660979079455522, 17.786916140764486, 28.035677015092542, 18.564411272278168, 16.272108255806636, 26.965987383911216, 9.612609643779257, 25.872599871970237, 27.218246720447503, 20.325778505435885, 18.936039027883808, 15.477195046615673, 13.02826630530366, 19.721719785786714, 17.95538112246743, 26.514384638174302, 19.940582733372413, 29.803788685811796, 12.744682426245475, 21.96172376071723, 7.13958973182527, 19.331553041642838, 23.026324698452864, 15.89243819447319, 12.750234672481131, 12.817221459062456, 24.08311653880928, 17.915428582408147, 19.60831476516425, 13.591747475601784, 22.269175010433806, 16.40045649690633, 26.212731545063953, 17.189694969568087, 19.290646876693728, 29.48771149738099, 15.00256873352966, 23.806049951441956, 17.922177431278147, 16.94937650700647, 19.017567984695347, 17.922855361811372, 21.23423180316982, 10.296933595457952, 34.0102567081334, 21.418944723442877, 22.92947089505755, 13.395069921483882, 18.961802732961736, 22.20386757546194, 19.932895754541274, 19.47346483546775, 20.02244213505398, 21.61905368540292, 21.057612077965672, 15.745149078358317, 17.10927906602999, 21.374363314166228, 27.207246339449156, 28.65132382751966, 26.5235810096292, 20.079655009549498, 13.524717284623769, 17.144548897083535, 19.43290179126449, 20.102647395663695, 17.681309139004412, 24.41039217856774, 23.830888340807736, 12.91645512994677, 23.405394610975762, 15.22004093097381, 19.37180391195557, 11.323633305808997, 21.27744360357748, 13.49069438015011, 27.246916715124172, 25.514852585848573, 30.75267299333164, 25.65483725652406, 21.67057952668947, 8.511839570535397, 15.898272087846763, 24.271809482927488, 21.227373412474577, 17.668813547995015, 16.44086485210314, 23.658981734067353, 19.663239039162836, 22.870367553227304, 19.39521042853575, 19.230360574090103, 17.378874554145053, 21.118362042223005, 14.806859931043418, 10.103065976917085, 6.565252360364379, 14.435617035107114, 20.75133872511598, 24.128731814963217, 20.97554059816284, 11.255200493050108, 22.023897917131844, 21.167697779347396, 15.662043159790105, 26.581020904311185, 20.308272188274266, 13.935312993978169, 15.476836354617618, 7.668270160586587, 18.47976501341011, 24.457871190811975, 23.250615535986444, 14.56615476967083, 22.976852333130793, 24.9437942178904, 20.741798095224155, 18.867442399359163, 32.694679203078245, 27.47965841175357, 17.78410612062425, 14.457933099608507, 14.397337700167668, 28.03564982848887, 18.663043937065968, 21.82821753298622, 27.85432921639147, 25.79269149807274, 20.343701287448148, 20.445197639661536, 15.5619135471377, 21.610349615717283, 22.69736706692744, 27.08754804254669, 10.808056629347012],
                    "months": [0.9207248601419975, 6.680277027272784, 0.5035833173943534, 9.811825068788224, 3.3604366651317026, 9.923831188278301, 5.803141497826641, 2.429551866226275, 8.454419147330261, 3.7001136454856973, 6.974819552464654, 2.1488049874011264, 3.3263753552663586, 4.401178122880583, 2.592219539213237, 10.458706301822076, 2.4446862517392853, 6.932634917118358, 12.336609068902167, 8.419680123728847, 9.613226205662501, 0.6902559111023523, 3.4690141442329625, 3.108569957889631, 7.434031463117735, 11.24344638843593, 1.2737408482238397, 4.664043928920095, 3.2394223398660937, 1.0922789868760896, 6.224520258197569, 8.547692815948626, 4.1810053610412865, 3.034130842986006, 4.514089827945427, 0.45615118171939795, 5.399487027265191, 8.66032826837657, 5.029358249172864, 6.857449105721823, 5.2682094123298775, 4.3079543002824705, 0.0, 4.389495858080642, 6.195304600957452, 0.0, 2.68144629459147, 3.0537149785532822, 2.2607110791299005, 10.610425761229425, 0.0, 6.137647594989844, 3.0079266198483, 0.0, 4.709707343191896, 11.49993340367836, 4.824267027263602, 3.0770337798301717, 4.2338713048620615, 5.818948452534412, 1.219207183529031, 8.976934139444126, 3.9933041451939006, 4.593852546886612, 8.0684631139677, 6.542870031028297, 5.923057066718441, 0.7071485605398209, 4.902144451134802, 5.6349681376695475, 5.2950901472628225, 2.7563009119131654, 3.6890882069753914, 7.453708346158324, 3.1495034598192273, 1.435116688463283, 2.1979818524956225, 0.6652992730590839, 9.252733968450329, 5.714971401341643, 6.759038638273934, 5.223746928007952, 1.1695540522830674, 1.1698189623499635, 9.731982805576372, 6.123102012226087, 3.3432630983654406, 3.685597361911722, 4.447972196209705, 4.583988296524899, 6.783487171600231, 4.7030324977469835, 0.6737636803735398, 6.53519177949474, 6.18142307754218, 7.130428484879128, 1.0182288803534574, 2.350690166339093, 6.646438842288402, 0.41764328375962645, 5.702548710757377, 3.3260315994592307, 6.657814303728783, 7.828442904809019, 7.3622037560164335, 6.500184832551069, 7.409172336029129, 3.16387597674962, 6.084580994957884, 3.890448342688911, 0.4547411496258995, 7.2044536446813225, 4.861113870497791, 7.374349717597833, 1.424608162895641, 3.5601162648505897, 1.750880352268534, 0.0, 6.738684885044725, 5.2366323452381005, 5.1952171689144295, 0.0, 0.0, 3.5587235510513877, 3.79517735759731, 3.0293451506272095, 6.307148897073535, 2.4662162081124372, 10.775654608426233, 5.3102594120945685, 4.897023865122424, 3.8987898398715313, 7.346590582988347, 9.028210122352148, 7.027226615160665, 1.1258561482999276, 7.653042083498476, 7.548532387917417, 4.311038828699596, 8.761934675011629, 4.963914130942786, 2.199746238898908, 0.7402314062924598, 3.83143577279393, 4.243495815608975, 8.357162729298231, 6.480070661124598, 7.304292423033296, 4.006777346706585, 4.393011956942071, 7.398562512946088, 6.059824215815489, 7.14450373685165, 2.3088989451411623, 3.6163111727950543, 0.0, 12.499321638437262, 5.469903315956771, 3.5720475407099523, 2.3791368630802765, 1.362338294762755, 6.5343460998393015, 6.098387753485499, 5.841907897279206, 7.112836271151815, 2.772190113791799, 1.8108583060835999, 2.8721254469419932, 0.47575389687586256, 2.0516368246199104, 0.0, 1.449436503317611, 0.7697892484630318, 6.321759039492974, 0.0, 7.763609402701268, 4.6874833083006155, 6.50810821170718, 5.279781091734728, 6.477196955918469, 5.346614584946245, 9.054417921992922, 5.313982960434237, 0.0, 11.679687810540404, 9.153985055127952, 7.460632873691415, 5.171952106812723, 2.988702004691663, 2.9796931513744243, 4.401963409912105, 2.969411947259019, 1.3576942204397393, 0.0, 9.69298969958935, 3.152955689395956, 6.282233942481725, 5.821860211851871, 2.121589775169561, 5.246585849782589, 13.051669079061885, 10.512036157502658, 14.964249826750326, 13.753140924539519, 12.358981109117455, 13.71610051713684, 10.282410989449884, 11.76468505019247, 14.419943347881746, 14.873857826237597, 13.813790940657025, 15.047967114520718, 16.04556479751262, 13.24078693044107, 9.518820790918884, 13.593974506125381, 10.64666232278031, 10.182734682665505, 13.491235679568932, 12.715206965524676, 7.374472967242979, 10.631988818413808, 11.78790187389742, 15.630321873910876, 12.355727138559681, 16.7721465725044, 13.192591529749873, 9.359319880004904, 10.830130813008203, 9.911502277035893, 13.007531722715099, 11.188905041405699, 13.17253533348068, 16.521171588363895, 12.001027858759416, 10.089058245441517, 8.735633444595965, 8.303677898654735, 8.306427545270516, 13.507697409610415, 12.233789137532797, 11.646390100868897, 6.983760904023056, 12.432174253891965, 8.23451341980437, 12.939537619655152, 13.934489354104224, 12.994257835865389, 12.307315765341034, 15.72922577704697, 11.423591133532417, 11.925700008885581, 11.349929022003966, 11.48562194570984, 7.97243811963587, 8.347652917446561, 10.144734352403498, 12.164124717619842, 14.216105692205208, 12.418280364441303, 10.12999447833737, 15.886678162034755, 14.490079018320108, 13.795799366799494, 10.628959499432469, 11.522560613934688, 13.007942881404269, 17.34570590719079, 11.447061585475714, 12.317285040792813, 14.12022225794907, 9.082681160292296, 13.817975138641213, 13.753892968138919, 14.871451130076805, 9.608546609452336, 9.918017231639048, 12.208642529503026, 9.010060520543629, 12.025183016203298, 15.00314456811138, 13.395667441744557, 12.686062050345837, 10.609904108566926, 15.185551082572097, 11.696798750230787, 12.120065655487432, 12.599732893338444, 11.058537013187518, 9.56926848434345, 13.363234379898614, 12.780781042151874, 11.410951982767385, 11.674789047783278, 9.780631200513213, 14.304085410253029, 9.969983971011544, 12.242480978129537, 12.432965323416777, 12.975335953721828, 15.53915535440728, 8.893038475346843, 13.012275695295994, 11.949427801830447, 12.602477996114821, 14.335421229788075, 8.67965299878601, 12.131887417379932, 7.788120456982239, 14.078958294615306, 12.797658375132379, 8.604566368463935, 10.94021049259976, 11.766796781591909, 9.054183390824281, 11.495334347948498, 16.9202852632217, 10.088695929334255, 11.385502646437653, 13.90373010939795, 10.310333686822734, 14.728661943176828, 12.896511061546777, 13.367022944956146, 16.264178709825753, 16.896832801929378, 12.657103481936574, 15.056224518593057, 12.779464988080107, 12.102903158722327, 10.976499916511015, 7.4580143620137935, 16.609189618221357, 9.238201444926435, 10.461886754252117, 11.915507283255554, 7.3087650085560165, 11.604549606865463, 8.261124103755847, 11.130336586863061, 13.1014834384888, 12.329349831137534, 13.923409727048739, 14.282445421660487, 12.800469486044458, 15.379933376331584, 7.850306904224184, 10.379584760967523, 12.602324398448639, 14.286973401834711, 11.999686746674877, 8.813324257561508, 12.148704316592214, 14.025699456949706, 12.767678159762959, 11.95506764484674, 7.4964700512544855, 12.663318964816302, 12.710059143472705, 12.72381411678682, 8.526136339580464, 7.487668620646131, 12.241638867272513, 12.663227468662768, 10.888033393638143, 13.758782451558565, 10.874661344965926, 12.264032468165738, 12.819085726075594, 12.384071445387303, 14.401331059148436, 14.144527081968576, 10.69670853185516, 9.666402529846073, 7.181796751834087, 11.345397850892645, 13.425563088173018, 11.417735019748013, 11.07111149532171, 13.159057622635359, 11.536743245414556, 15.405837901342972, 12.27315631963698, 16.140558900535282, 14.93818070228217, 10.059952528514764, 12.037067105785686, 13.305428098535847, 15.339869436027623, 9.480443398628, 12.297774903980677, 14.31513145504484, 9.529641881613491, 11.846577451411308, 12.54594993035261, 11.260045631598816, 13.351773733140526, 9.76075584405247, 14.327049052662193, 11.866372467713107],
                    "fill_color": ["green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "green", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red"]
                },
                "id": "4535fe45-ee2d-4a50-a752-df83cb485847"
            },
            "type": "ColumnDataSource",
            "id": "4535fe45-ee2d-4a50-a752-df83cb485847"
        }, {
            "attributes": {
                "tags": [],
                "doc": null,
                "renderers": [],
                "callback": null,
                "names": [],
                "id": "604e01c6-9b3f-4a40-a413-0b1e2b2b7e58"
            },
            "type": "DataRange1d",
            "id": "604e01c6-9b3f-4a40-a413-0b1e2b2b7e58"
        }, {
            "attributes": {
                "plot": {
                    "subtype": "Figure",
                    "type": "Plot",
                    "id": "e6c4c346-72c9-4ec9-857a-53cc44704961"
                },
                "dimensions": ["width", "height"],
                "tags": [],
                "doc": null,
                "renderers": [{
                    "type": "GlyphRenderer",
                    "id": "fe954ad4-a1da-47cc-8f65-0fdab0b14a90"
                }, {
                    "type": "GlyphRenderer",
                    "id": "40952a0f-ce91-4284-a9ce-0f403102c187"
                }
                ],
                "callback": null,
                "names": [],
                "id": "3f421147-93dc-4669-8ed5-0349de7224ed"
            },
            "type": "BoxSelectTool",
            "id": "3f421147-93dc-4669-8ed5-0349de7224ed"
        }, {
            "attributes": {
                "column_names": [],
                "tags": [],
                "doc": null,
                "selected": {
                    "2d": {
                        "indices": []
                    },
                    "1d": {
                        "indices": []
                    },
                    "0d": {
                        "indices": [],
                        "flag": false
                    }
                },
                "callback": null,
                "data": {},
                "id": "f2463f60-e79a-4bf0-8fb9-3c032161b010"
            },
            "type": "ColumnDataSource",
            "id": "f2463f60-e79a-4bf0-8fb9-3c032161b010"
        }, {
            "attributes": {
                "tags": [],
                "doc": null,
                "renderers": [],
                "callback": null,
                "names": [],
                "id": "837d90c8-f888-4479-ac3d-a2a666d8efdb"
            },
            "type": "DataRange1d",
            "id": "837d90c8-f888-4479-ac3d-a2a666d8efdb"
        }, {
            "attributes": {
                "plot": {
                    "subtype": "Figure",
                    "type": "Plot",
                    "id": "e6c4c346-72c9-4ec9-857a-53cc44704961"
                },
                "tags": [],
                "doc": null,
                "axis_label": "Unemployed duration (months)",
                "formatter": {
                    "type": "BasicTickFormatter",
                    "id": "7640ecaf-ce4b-4de5-aee3-3f5d95e84533"
                },
                "ticker": {
                    "type": "BasicTicker",
                    "id": "9aaf5883-ac36-4216-9e86-61a5ccd20463"
                },
                "id": "e6fb33c3-74a8-42ce-874e-28ddf311ce71"
            },
            "type": "LinearAxis",
            "id": "e6fb33c3-74a8-42ce-874e-28ddf311ce71"
        }, {
            "subtype": "Figure",
            "type": "Plot",
            "id": "e6c4c346-72c9-4ec9-857a-53cc44704961",
            "attributes": {
                "x_range": {
                    "type": "DataRange1d",
                    "id": "604e01c6-9b3f-4a40-a413-0b1e2b2b7e58"
                },
                "right": [],
                "tags": [],
                "tools": [{
                    "type": "BoxSelectTool",
                    "id": "3f421147-93dc-4669-8ed5-0349de7224ed"
                }, {
                    "type": "WheelZoomTool",
                    "id": "8ef6d540-f685-4da4-883a-037525419fdf"
                }, {
                    "type": "ResetTool",
                    "id": "abc3e048-f0ac-4ced-988f-74cc4e71cc7f"
                }, {
                    "type": "HoverTool",
                    "id": "e9e19759-91ad-4e98-8656-0b6daa853bcb"
                }
                ],
                "title": "NAV risk assessment",
                "extra_y_ranges": {},
                "plot_width": 960,
                "renderers": [{
                    "type": "LinearAxis",
                    "id": "e6fb33c3-74a8-42ce-874e-28ddf311ce71"
                }, {
                    "type": "Grid",
                    "id": "f7006554-bed5-40fe-9e13-cd2d6fd8bfc1"
                }, {
                    "type": "LinearAxis",
                    "id": "5200eed6-e502-4123-8c31-ace7bf417248"
                }, {
                    "type": "Grid",
                    "id": "6f1c41bc-47fe-43b8-b5a9-0c8f3be92457"
                }, {
                    "type": "GlyphRenderer",
                    "id": "fe954ad4-a1da-47cc-8f65-0fdab0b14a90"
                }, {
                    "type": "GlyphRenderer",
                    "id": "40952a0f-ce91-4284-a9ce-0f403102c187"
                }
                ],
                "extra_x_ranges": {},
                "plot_height": 400,
                "tool_events": {
                    "type": "ToolEvents",
                    "id": "35f8ca4c-beff-47bb-8ae0-2b9ff428571f"
                },
                "above": [],
                "doc": null,
                "id": "e6c4c346-72c9-4ec9-857a-53cc44704961",
                "y_range": {
                    "type": "DataRange1d",
                    "id": "837d90c8-f888-4479-ac3d-a2a666d8efdb"
                },
                "below": [{
                    "type": "LinearAxis",
                    "id": "e6fb33c3-74a8-42ce-874e-28ddf311ce71"
                }
                ],
                "left": [{
                    "type": "LinearAxis",
                    "id": "5200eed6-e502-4123-8c31-ace7bf417248"
                }
                ]
            }
        }, {
            "attributes": {
                "plot": {
                    "subtype": "Figure",
                    "type": "Plot",
                    "id": "e6c4c346-72c9-4ec9-857a-53cc44704961"
                },
                "tags": [],
                "doc": null,
                "dimension": 0,
                "ticker": {
                    "type": "BasicTicker",
                    "id": "9aaf5883-ac36-4216-9e86-61a5ccd20463"
                },
                "id": "f7006554-bed5-40fe-9e13-cd2d6fd8bfc1"
            },
            "type": "Grid",
            "id": "f7006554-bed5-40fe-9e13-cd2d6fd8bfc1"
        }, {
            "attributes": {
                "plot": {
                    "subtype": "Figure",
                    "type": "Plot",
                    "id": "e6c4c346-72c9-4ec9-857a-53cc44704961"
                },
                "dimensions": ["width", "height"],
                "tags": [],
                "doc": null,
                "id": "8ef6d540-f685-4da4-883a-037525419fdf"
            },
            "type": "WheelZoomTool",
            "id": "8ef6d540-f685-4da4-883a-037525419fdf"
        }, {
            "attributes": {
                "line_color": {
                    "value": "#1f77b4"
                },
                "line_alpha": {
                    "value": 0.1
                },
                "fill_color": {
                    "value": "#1f77b4"
                },
                "tags": [],
                "doc": null,
                "fill_alpha": {
                    "value": 0.1
                },
                "y": {
                    "field": "apps_"
                },
                "x": {
                    "field": "months"
                },
                "id": "b15cb870-c2a9-45de-82df-2d40c13a09e3",
                "size": {
                    "units": "screen",
                    "value": 10
                }
            },
            "type": "Circle",
            "id": "b15cb870-c2a9-45de-82df-2d40c13a09e3"
        }, {
            "attributes": {
                "tags": [],
                "doc": null,
                "mantissas": [2, 5, 10],
                "id": "ea47ac64-86af-43fd-9e0f-e2aac04b7e5a",
                "num_minor_ticks": 5
            },
            "type": "BasicTicker",
            "id": "ea47ac64-86af-43fd-9e0f-e2aac04b7e5a"
        }, {
            "attributes": {
                "doc": null,
                "id": "3af22de4-b0af-4423-9103-e53c134a7e0e",
                "tags": []
            },
            "type": "BasicTickFormatter",
            "id": "3af22de4-b0af-4423-9103-e53c134a7e0e"
        }, {
            "attributes": {
                "line_color": {
                    "field": "line_color"
                },
                "line_alpha": {
                    "value": 1.0
                },
                "fill_color": {
                    "field": "fill_color"
                },
                "tags": [],
                "doc": null,
                "fill_alpha": {
                    "value": 0.2
                },
                "y": {
                    "field": "apps_"
                },
                "x": {
                    "field": "months"
                },
                "id": "7da13c43-8591-4ecf-8457-8661874e391f",
                "size": {
                    "units": "screen",
                    "value": 10
                }
            },
            "type": "Circle",
            "id": "7da13c43-8591-4ecf-8457-8661874e391f"
        }, {
            "attributes": {
                "tooltips": [["Name", "@names_"], ["Months unemployed", "$x{int}"], ["Submissions", "$y{int}"]],
                "plot": {
                    "subtype": "Figure",
                    "type": "Plot",
                    "id": "e6c4c346-72c9-4ec9-857a-53cc44704961"
                },
                "tags": [],
                "doc": null,
                "renderers": [],
                "callback": null,
                "names": [],
                "id": "e9e19759-91ad-4e98-8656-0b6daa853bcb"
            },
            "type": "HoverTool",
            "id": "e9e19759-91ad-4e98-8656-0b6daa853bcb"
        }, {
            "attributes": {
                "nonselection_glyph": {
                    "type": "Circle",
                    "id": "8f4206cf-b6d7-4ff0-80de-41012e9fae44"
                },
                "data_source": {
                    "type": "ColumnDataSource",
                    "id": "f2463f60-e79a-4bf0-8fb9-3c032161b010"
                },
                "tags": [],
                "doc": null,
                "selection_glyph": null,
                "id": "40952a0f-ce91-4284-a9ce-0f403102c187",
                "glyph": {
                    "type": "Circle",
                    "id": "97fc5762-8866-43d7-a013-e08588fa9b1f"
                }
            },
            "type": "GlyphRenderer",
            "id": "40952a0f-ce91-4284-a9ce-0f403102c187"
        }, {
            "attributes": {
                "doc": null,
                "id": "7640ecaf-ce4b-4de5-aee3-3f5d95e84533",
                "tags": []
            },
            "type": "BasicTickFormatter",
            "id": "7640ecaf-ce4b-4de5-aee3-3f5d95e84533"
        }, {
            "attributes": {
                "tags": [],
                "doc": null,
                "mantissas": [2, 5, 10],
                "id": "9aaf5883-ac36-4216-9e86-61a5ccd20463",
                "num_minor_ticks": 5
            },
            "type": "BasicTicker",
            "id": "9aaf5883-ac36-4216-9e86-61a5ccd20463"
        }
        ];
        Bokeh.load_models(all_models);
        var plots = [{
            'modeltype': 'Plot',
            'elementid': 'd7fb458d-7de5-48ac-a0b7-f577fe3066a9',
            'modelid': 'e6c4c346-72c9-4ec9-857a-53cc44704961'
        }
        ];
        for (idx in plots) {
            var plot = plots[idx];
            var model = Bokeh.Collections(plot.modeltype).get(plot.modelid);
            Bokeh.logger.info('Realizing plot:')
            Bokeh.logger.info(' - modeltype: ' + plot.modeltype);
            Bokeh.logger.info(' - modelid: ' + plot.modelid);
            Bokeh.logger.info(' - elementid: ' + plot.elementid);
            var view = new model.default_view({
                model: model,
                el: '#' + plot.elementid
            });
            Bokeh.index[plot.modelid] = view;
        }
    });