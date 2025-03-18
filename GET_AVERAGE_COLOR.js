/******************************************************************************\
# JS - GET_AVERAGE_COLOR                         #       Maximum Tension       #
################################################################################
#                                                #      -__            __-     #
# Teoman Deniz                                   #  :    :!1!-_    _-!1!:    : #
# maximum-tension.com                            #  ::                      :: #
#                                                #  :!:    : :: : :  :  ::::!: #
# +.....................++.....................+ #   :!:: :!:!1:!:!::1:::!!!:  #
# : C - Maximum Tension :: Create - 2024/11/22 : #   ::!::!!1001010!:!11!!::   #
# :---------------------::---------------------: #   :!1!!11000000000011!!:    #
# : License - MIT       :: Update - 2025/03/18 : #    ::::!!!1!!1!!!1!!!::     #
# +.....................++.....................+ #       ::::!::!:::!::::      #
\******************************************************************************/

async function /* OBJECT */ 
	GET_AVERAGE_COLOR(IMAGE)
{
	return (
		new Promise(
			function (RESOLVE)
			{
				function
					RGB_TO_HEX(RGB)
				{
					return (
						'#' +
						RGB.R.toString(16).padStart(2, '0') +
						RGB.G.toString(16).padStart(2, '0') +
						RGB.B.toString(16).padStart(2, '0')
					);
				}

				const CANVAS = document.createElement('canvas');
				const CONTEXT = CANVAS.getContext('2d');
				const RESULT = {
					RGB: {R: 0, G: 0, B: 0},
					HEX: ""
				};

				function
					PROCESS_IMAGE()
				{
					let R = 0;
					let G = 0;
					let B = 0;
					let COUNT = 0;

					CANVAS.width = IMAGE.naturalWidth;
					CANVAS.height = IMAGE.naturalHeight;
					CONTEXT.drawImage(IMAGE, 0, 0);

					const IMAGE_DATA =
						CONTEXT.getImageData(0, 0, CANVAS.width, CANVAS.height);

					for (let I = 0; I < IMAGE_DATA.data.length; I += 4)
					{
						R += IMAGE_DATA.data[I];
						G += IMAGE_DATA.data[I + 1];
						B += IMAGE_DATA.data[I + 2];
						++COUNT;
					}

					RESULT.RGB.R = Math.floor(R / COUNT);
					RESULT.RGB.G = Math.floor(G / COUNT);
					RESULT.RGB.B = Math.floor(B / COUNT);
					RESULT.HEX = RGB_TO_HEX(RESULT.RGB);
					RESOLVE(RESULT);
				}

				if (IMAGE.complete)
					PROCESS_IMAGE(); 
				else
					IMAGE.onload = PROCESS_IMAGE;
			}
		)
	);
}
