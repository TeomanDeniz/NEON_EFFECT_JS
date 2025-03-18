/******************************************************************************\
# JS - NEON_IMAGE                                #       Maximum Tension       #
################################################################################
#                                                #      -__            __-     #
# Teoman Deniz                                   #  :    :!1!-_    _-!1!:    : #
# maximum-tension.com                            #  ::                      :: #
#                                                #  :!:    : :: : :  :  ::::!: #
# +.....................++.....................+ #   :!:: :!:!1:!:!::1:::!!!:  #
# : C - Maximum Tension :: Create - 2025/02/25 : #   ::!::!!1001010!:!11!!::   #
# :---------------------::---------------------: #   :!1!!11000000000011!!:    #
# : License - MIT       :: Update - 2025/03/05 : #    ::::!!!1!!1!!!1!!!::     #
# +.....................++.....................+ #       ::::!::!:::!::::      #
\******************************************************************************/

async function
	NEON_IMAGE()
{
	function
		IS_DARK(RGB)
	{
		return ((RGB.R + RGB.G + RGB.B) / 3 < 50);
	}

	function
		BRIGHTEN_COLOR(RGB)
	{
		return (
			{
				R: Math.min(255, Math.floor(RGB.R * 4)),
				G: Math.min(255, Math.floor(RGB.G * 4)),
				B: Math.min(255, Math.floor(RGB.B * 4))
			}
		);
	}

	function
		GENERATE_COLOR_IMAGE(RGB, WIDTH, HEIGHT)
	{
		const CANVAS = document.createElement("CANVAS");

		CANVAS.width = WIDTH;
		CANVAS.height = HEIGHT;

		const CONTEXT = CANVAS.getContext("2d");

		CONTEXT.fillStyle = "RGB(" + RGB.R + ", " + RGB.G + ", " + RGB.B + ")";
		CONTEXT.fillRect(0, 0, WIDTH, HEIGHT);

		return (CANVAS.toDataURL());
	}

	const IMAGE_ELEMENTS = document.querySelectorAll(".NEON_IMAGE");

	for (const IMAGE_ELEMENT of IMAGE_ELEMENTS)
	{
		if (!IMAGE_ELEMENT.hasAttribute("DATA-NEON"))
		{
			const IMAGE = IMAGE_ELEMENT.querySelector("IMG");
			const IMAGE_BLUR_SMALL = document.createElement("IMG");
			const IMAGE_BLUR_BIG = document.createElement("IMG");
			const AVERAGE_COLOR = await GET_AVERAGE_COLOR(IMAGE);

			IMAGE_BLUR_SMALL.classList.add("NEON_BLUR_SMALL");
			IMAGE_BLUR_BIG.classList.add("NEON_BLUR_BIG");
			IMAGE_BLUR_SMALL.alt = "";
			IMAGE_BLUR_BIG.alt = "";

			if (
				!IMAGE_ELEMENT.hasAttribute("DATA-FORCE-BLUR") &&
				IS_DARK(AVERAGE_COLOR.RGB)
			)
			{
				const BRIGHT_COLOR = BRIGHTEN_COLOR(AVERAGE_COLOR.RGB);
				const BASE64_IMAGE = GENERATE_COLOR_IMAGE(
					BRIGHT_COLOR,
					IMAGE.width,
					IMAGE.height
				);

				IMAGE_BLUR_SMALL.src = BASE64_IMAGE;
				IMAGE_BLUR_BIG.src = BASE64_IMAGE;
			}
			else
			{
				IMAGE_BLUR_SMALL.src = IMAGE.src;
				IMAGE_BLUR_BIG.src = IMAGE.src;
			}

			IMAGE.classList.add("NEON_IMG");
			IMAGE_ELEMENT.setAttribute("DATA-NEON", undefined);
			IMAGE_ELEMENT.appendChild(IMAGE_BLUR_SMALL);
			IMAGE_ELEMENT.appendChild(IMAGE_BLUR_BIG);
			IMAGE_ELEMENT.appendChild(IMAGE);
		}
	}
}
