<?php
/* -----------------------------------------------------------------
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
------------------------------------------------------------------- */
?>
<?php
// incrustafoto.php?mapa=&&foto=FotoPrueba/rags.jpg&&x=&&y=&&width=&&height=
// 127.0.0.1:8887/DEF/31/incrustafoto.php?mapa=Mapas/Sergi3/&&foto=FotoPrueba/doggy.jpg&&x=1274&&y=1&&width=500&&height=579



$data=$_GET["data"];



$f=fopen('../../maps/DemoJulie/operaciones.html',"w+");

fputs($f,"".$data); 
fclose($f);


echo("ok!");

?>





