<?php
include ("assets/database/koneksi.php");

$sqlK_Now = "SELECT suhu FROM datasensor ORDER BY id DESC LIMIT 1";
$newK = $koneksi->query($sqlK_Now);

if ($newK->num_rows > 0) {
  $nilainewK;
  while ($row = $newK->fetch_assoc()) {
    $nilainewK= $row["suhu"];
  }
};