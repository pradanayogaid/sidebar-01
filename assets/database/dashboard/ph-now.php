<?php
include ("assets/database/koneksi.php");

$sqlPH_Now = "SELECT kelembaban FROM datasensor ORDER BY id DESC LIMIT 1";
$NewPH = $koneksi->query($sqlPH_Now);

if ($NewPH->num_rows > 0) {
  $nilaiNewPH;
  while ($row = $NewPH->fetch_assoc()) {
    $nilaiNewPH= $row["kelembaban"];
  }
};