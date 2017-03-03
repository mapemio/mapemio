/*-----------------------------------------------------------------
MAPEMIO: A graphic Content Management System in a maps way!
Copyright (C) 2017 Sergio Guillen Alonso - www.mapemio.com
sergio@naraia.com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
-------------------------------------------------------------------*/
function insertSpecialObject1()
{






//	datos="nombre=" + mapName + "&num=" + w + "&num2=" + h + "&doGenerate=Generate" + "&parcela_descripcion=" + parcela_descripcion + "&parcela_borde=" + parcela_borde + "&background_resize=" + background_resize + "&plantilla=" + plantilla+ "&MAX_ZOOM=" + MAX_ZOOM;



	carga=$.ajax({
		async: true,
		cache: false,
		url: "scripts/insertSpecialObject1.php",
		type: "GET",
		data: datos,
		dataType: "HTML",
		success: function(data)
		{ 

			$("#draggable").append(data);

			},
		error: function(data)
		{
			alert("ERROR!");
			}
  });

alert("FIN");
}
