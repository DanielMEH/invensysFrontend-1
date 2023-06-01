import React, { useState } from "react";
import { MenuLateral } from "../components/MenuLateral";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
let stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

let moneyPrice = 1350000;
const FormLicence = () => {
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log(paymentMethod);
    }
  };

  const money = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="shadow-xl border absolute inset-0 m-auto h-fit bg-white rounded-md p-4 w-[20rem]"
      >
        <h2 className="text-2xl block font-bold text-center py-1 text-[#3498db] ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <defs>
                <linearGradient
                  id="vscodeIconsFileTypeKey0"
                  x1="15.699"
                  x2="15.469"
                  y1="102.24"
                  y2="106.745"
                  gradientTransform="rotate(6.54 714.316 146.409)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".365" stop-color="#961b1e" />
                  <stop offset=".697" stop-color="#961b1e" />
                </linearGradient>
                <linearGradient
                  id="vscodeIconsFileTypeKey1"
                  x1="15.297"
                  x2="15.297"
                  y1="103.82"
                  y2="105.61"
                  gradientTransform="rotate(6.54 714.316 146.409)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".326" stop-color="#c0272d" />
                  <stop offset=".82" stop-color="#c0272d" />
                </linearGradient>
                <linearGradient
                  id="vscodeIconsFileTypeKey2"
                  x1="-3310.623"
                  x2="-3310.854"
                  y1="803.906"
                  y2="808.435"
                  gradientTransform="matrix(-1.071 .315 .248 .986 -3724.367 274.118)"
                  href="#vscodeIconsFileTypeKey0"
                />
                <linearGradient
                  id="vscodeIconsFileTypeKey3"
                  x1="-3311.013"
                  x2="-3311.013"
                  y1="805.472"
                  y2="807.262"
                  gradientTransform="matrix(-1.071 .315 .248 .986 -3724.367 274.118)"
                  href="#vscodeIconsFileTypeKey1"
                />
                <linearGradient
                  id="vscodeIconsFileTypeKey4"
                  x1="22.94"
                  x2="22.874"
                  y1="23.821"
                  y2="14.932"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#651116" />
                  <stop offset=".053" stop-color="#6a1217" />
                  <stop offset=".463" stop-color="#901b20" />
                  <stop offset=".793" stop-color="#a72126" />
                  <stop offset="1" stop-color="#b02328" />
                </linearGradient>
                <linearGradient
                  id="vscodeIconsFileTypeKey5"
                  x1="24.269"
                  x2="21.317"
                  y1="22.368"
                  y2="16.316"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".006" stop-color="#ca4849" />
                  <stop offset=".421" stop-color="#c0272d" />
                  <stop offset="1" stop-color="#730b0d" />
                </linearGradient>
                <linearGradient
                  id="vscodeIconsFileTypeKey6"
                  x1="24.103"
                  x2="21.475"
                  y1="22.049"
                  y2="16.617"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".006" stop-color="#ca4849" />
                  <stop offset=".421" stop-color="#c0272d" />
                  <stop offset="1" stop-color="#651116" />
                </linearGradient>
                <linearGradient
                  id="vscodeIconsFileTypeKey7"
                  x1="24.273"
                  x2="21.218"
                  y1="22.551"
                  y2="16.168"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".017" stop-color="#b12328" />
                  <stop offset=".096" stop-color="#d9383c" />
                  <stop offset=".994" stop-color="#651116" />
                </linearGradient>
                <linearGradient
                  id="vscodeIconsFileTypeKey8"
                  x1="382.633"
                  x2="382.575"
                  y1="-41.131"
                  y2="-64.593"
                  gradientTransform="matrix(1 0 0 -1 -366.615 -37.7)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ffe800" />
                  <stop offset="1" stop-color="#dfb300" />
                </linearGradient>
                <linearGradient
                  id="vscodeIconsFileTypeKey9"
                  x1="383.31"
                  x2="382.426"
                  y1="-58.563"
                  y2="-58.563"
                  gradientTransform="matrix(1 0 0 -1 -366.615 -37.7)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ffe800" stop-opacity=".392" />
                  <stop offset="1" stop-color="#dfb300" stop-opacity=".392" />
                </linearGradient>
                <linearGradient
                  id="vscodeIconsFileTypeKeya"
                  x1="206.294"
                  x2="197.914"
                  y1="-130.964"
                  y2="-122.585"
                  gradientTransform="scale(1 -1) rotate(-45 249.44 155.996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#dfb300" />
                  <stop offset=".5" stop-color="#dfb300" />
                  <stop offset="1" stop-color="#dfb300" />
                </linearGradient>
                <linearGradient
                  id="vscodeIconsFileTypeKeyb"
                  x1="-722.753"
                  x2="-727.648"
                  y1="-709.665"
                  y2="-709.665"
                  gradientTransform="rotate(-90 3.457 -855.939) scale(1.188)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fff" />
                  <stop offset="1" stop-color="#fff" stop-opacity="0" />
                </linearGradient>
                <radialGradient
                  id="vscodeIconsFileTypeKeyc"
                  cx="131.214"
                  cy="24.534"
                  r="172.942"
                  gradientTransform="matrix(.028 0 0 .028 19.08 18.916)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".478" stop-color="#ec1c24" />
                  <stop offset=".775" stop-color="#961b1e" />
                  <stop offset="1" stop-color="#d9383c" />
                </radialGradient>
                <radialGradient
                  id="vscodeIconsFileTypeKeyd"
                  cx="137.714"
                  cy="50.972"
                  r="170.148"
                  gradientTransform="matrix(.027 0 0 .027 19.021 18.917)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".618" stop-color="#6c0607" />
                  <stop offset=".994" stop-color="#b12328" />
                </radialGradient>
                <radialGradient
                  id="vscodeIconsFileTypeKeye"
                  cx="-127.767"
                  cy="14.566"
                  r="120.907"
                  gradientTransform="rotate(180 9.643 9.865) scale(.027)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".876" stop-color="#c0272d" />
                  <stop offset="1" stop-color="#831416" />
                </radialGradient>
                <radialGradient
                  id="vscodeIconsFileTypeKeyf"
                  cx="-95.684"
                  cy="89.934"
                  r="191.556"
                  gradientTransform="rotate(180 9.643 9.865) scale(.027)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#c5263b" />
                  <stop offset="1" stop-color="#910d10" />
                </radialGradient>
              </defs>
              <path
                fill="gray"
                d="M6.354 3.748v24.5h19.265V8.115h-4.8V3.748Zm16.195 1.084l.011 1.544h1.669l-1.68-1.547Z"
              />
              <path
                fill="#c5c5c5"
                d="M22.037 2H6.374a1.755 1.755 0 0 0-1.749 1.751v24.5A1.755 1.755 0 0 0 6.374 30h19.251a1.755 1.755 0 0 0 1.751-1.749V6.856Zm.525 2.844l1.663 1.531h-1.663ZM6.374 28.251v-24.5h14.437v4.374h4.812v20.126Z"
              />
              <path
                fill="#d7d8da"
                d="M27.047 28.749c-.062-.115-.089-.173-.126-.249l-.048-.15a7.9 7.9 0 0 0-.342-.889l-.048-.144l-.186-.555l-.007-.018l-.06-.179c-.054-.177-.112-.341-.171-.508l-.151-.449l-.013-.041l-.069-.2l-1.391-4.139l-.152.063l-1.877.809h-.017l-.044.019v.018l.006.04c.016.107.054.356.1.694l-1.771-.4l-.174-.037s-.8 3.7-1.105 5.176a9.881 9.881 0 0 0-.1.49c-.007.039-.013.067-.015.085l-.044.207l-.127.6l-.033.154a8.02 8.02 0 0 0-.249.965l-.062.315a4.718 4.718 0 0 0-.182.451c-.013.031-.026.063-.042.094l.01-.006l-.01.026c.081-.059.162-.121.243-.182c.165-.119.323-.244.5-.353l.013-.009l.122-.1l.031-.024a8.134 8.134 0 0 1 .9-.59l.1-.083l.33-.263l.143.115l.159.127a9.578 9.578 0 0 1 .875.564a3 3 0 0 1 .229.2c.207.176.452.337.654.538c-.022-.2-.045-.422-.082-.62c0-.1.006-.2.007-.307c0-.306-.011-.609-.013-.914v-.162l.037-1.481l.006-.222c.009-.367.025-1.051.028-1.106l.016-.62l.105.7l.014.1l.069.454l.157 1.04l.007.042l.024.156c.035.293.062.587.1.882c.013.1.027.2.044.294c.013.183.013.384.013.565c.134-.161.291-.341.43-.51a.4.4 0 0 0 .1-.105a7.506 7.506 0 0 1 .877-.87l.126-.148l.114-.133l.328.2l.1.063c.2.083.4.171.593.27c.048.025.1.056.163.091l.15.081c.286.157.6.3.89.458c-.073-.12-.118-.261-.202-.38Z"
              />
              <path
                fill="url(#vscodeIconsFileTypeKey0)"
                d="m22.534 21.04l.448 3.306c.013.077.024.154.041.232a3.188 3.188 0 0 1 .117.934l.032.234a1124.527 1124.527 0 0 1 .234 1.729c.035.322.06.644.1.967c.013.108.027.215.043.323c.013.2.013.421.013.62c.132-.176.286-.374.424-.56a.431.431 0 0 0 .1-.116a7.866 7.866 0 0 1 .863-.954l.124-.162l.112-.146l.323.221l.1.069c.2.091.394.188.584.3c.047.027.1.062.161.1l.148.089c.281.172.59.327.876.5c-.088-.132-.132-.286-.215-.417c-.061-.126-.088-.19-.124-.273l-.047-.165a9.435 9.435 0 0 0-.337-.976l-.047-.158l-.184-.609c-.021-.07-.044-.14-.064-.212c-.1-.38-.225-.711-.331-1.1l-.068-.224l-1.369-4.541Z"
              />
              <path
                fill="#961b1e"
                d="m24.588 20.053l1.369 4.541l.463 1.535l.184.609l.047.158a9.435 9.435 0 0 1 .337.976l.047.165c.036.083.063.147.124.273s.127.263.193.395c-.286-.154-.573-.331-.854-.481l-.148-.089a2.427 2.427 0 0 0-.161-.1c-.19-.108-.385-.2-.584-.3l-.1-.069l-.323-.221l-.112.146l-.124.162a7.866 7.866 0 0 0-.863.954a.427.427 0 0 1-.1.116c-.137.185-.292.383-.424.56c0-.2 0-.418-.013-.62a8.927 8.927 0 0 1-.043-.323c-.039-.323-.065-.645-.1-.967l-.023-.171l-.85-6.265l.139-.065l.51 3.21l.256 1.612l.229 1.443l.023.146a8.56 8.56 0 0 0 .093 1.131c.211-.414.594-.626.867-.974l.084-.112l.335-.448l.549.339l.114.071c.3.174.657.268.965.443c-.107-.281-.234-.564-.338-.849l-.037-.128l-.253-.907l-.356-1.274l-1.27-4.553Z"
              />
              <path
                fill="url(#vscodeIconsFileTypeKey1)"
                d="m22.576 21.015l.507 3.184l.255 1.6l.228 1.432l.023.144a13.248 13.248 0 0 0 .136 1.356c.2-.526.663-.75.985-1.139l.084-.11l.338-.442l-.11.021l.539.341l.113.071a7.905 7.905 0 0 1 1.137.579a11.365 11.365 0 0 0-.393-1.1a53.89 53.89 0 0 1-.072-.262l-.163-.589l-.443-1.6l-1.211-4.38l-.172.061l1.21 4.38c.023.08.423 1.532.443 1.6l.163.59l.073.262c.1.289.226.573.334.853l.126-.116c-.271-.17-.573-.212-.834-.393l-.116-.071l-.651-.412l-.063-.039l-.042.057l-.338.442l-.084.11a10.4 10.4 0 0 0-.877.971a.289.289 0 0 0 .13.04c-.043-.36.014-.751-.06-1.116l-.023-.144l-.228-1.432c-.012-.074-.2-1.293-.218-1.37l-.543-3.413Z"
              />
              <path
                fill="url(#vscodeIconsFileTypeKey2)"
                d="m23.1 21.977l-.077 3.448c0 .081-.007.161-.016.244a3.1 3.1 0 0 0-.012.973c0 .081 0 .163-.005.244l-.037 1.625v.178c0 .334.014.667.012 1c0 .112 0 .224-.007.337c.037.217.059.459.081.68c-.2-.22-.441-.4-.644-.59a3.015 3.015 0 0 0-.225-.218a9.252 9.252 0 0 0-.862-.619l-.156-.14l-.141-.126l-.324.289l-.1.091a7.961 7.961 0 0 0-.886.648l-.15.134c-.255.178-.5.4-.74.6c.066-.2.132-.419.221-.621l.061-.346a9.57 9.57 0 0 1 .246-1.058l.032-.17l.125-.655l.043-.228c.056-.4.156-.819.225-1.182l.046-.242l.929-4.886Z"
              />
              <path
                fill="#961b1e"
                d="M20.732 21.386s-1.144 5.907-1.2 6.31l-.043.228l-.125.655l-.032.17a9.57 9.57 0 0 0-.246 1.058l-.061.346c-.089.2-.133.4-.221.6c.264-.176.485-.4.739-.575c.059-.053.115-.1.15-.134a7.961 7.961 0 0 1 .886-.648l.1-.091l.324-.289l.141.126l.156.14a9.252 9.252 0 0 1 .862.619a3.015 3.015 0 0 1 .225.218c.2.193.445.369.644.59c-.022-.22-.044-.463-.081-.68c0-.113.007-.225.007-.337c0-.335-.01-.669-.012-1v-.178l.037-1.625c0-.081.029-1.38.033-1.46l.077-3.448l-.16-.038l-.156 3.362c0 .08-.075 1.61-.078 1.688a885.4 885.4 0 0 1-.07 1.512l-.007.152a8.276 8.276 0 0 1 .039 1.167c-.282-.378-.727-.517-1.068-.816l-.105-.1l-.422-.388l-.556.454l-.116.095c-.308.237-.684.4-1 .644c.083-.307.185-.62.263-.93l.024-.138c.048-.288.1-.617.164-.972l.23-1.365l.823-4.882Z"
              />
              <path
                fill="url(#vscodeIconsFileTypeKey3)"
                d="m23.049 21.961l-.157 3.335c0 .08-.075 1.6-.078 1.675l-.07 1.5c0 .052 0 .1-.007.151a12.939 12.939 0 0 1 .02 1.405c-.286-.493-.818-.628-1.218-.96l-.106-.095l-.424-.381h.122l-.546.454l-.114.094a9.727 9.727 0 0 0-1.17.816a11.9 11.9 0 0 1 .292-1.2l.046-.28l.1-.631l.038-.228a6.69 6.69 0 0 1 .246-1.488l.776-4.691l.2.028l-.776 4.691c-.015.087-.221 1.051-.246 1.488l-.038.228l-.1.631l-.046.281c-.074.314-.176.627-.259.934l-.151-.092c.274-.228.6-.331.861-.567a1.55 1.55 0 0 0 .117-.1l.66-.549l.064-.053l.059.053l.424.381l.106.1a10.05 10.05 0 0 1 1.078.81a.359.359 0 0 1-.137.067c0-.375-.108-.761-.074-1.146c0-.049 0-.1.008-.151l.07-1.5l.011-.235a8.828 8.828 0 0 1 .056-1.2l.168-3.575Z"
              />
              <path
                fill="url(#vscodeIconsFileTypeKey4)"
                d="M21.841 23.424a1.793 1.793 0 0 0 1.857.318c.77-.182.86-.681 1.4-1.043c.453-.272.951-.045 1.178-.59c.136-.408-.181-.907.09-1.315c.317-.59.86-.59.906-1.36c.045-.816-.589-.907-.815-1.451c-.271-.5.09-.816-.317-1.315a6.014 6.014 0 0 0-2.168-1.652c-.679-.136-1.228.518-1.953.473s-1.323-.641-2.048-.369c-1.313.544-.624 2.138-1.031 3.181a2.393 2.393 0 0 0 .043 2.724a11.381 11.381 0 0 0 .727 1.494c.453.725.951.408 1.63.589a1.238 1.238 0 0 1 .501.316Z"
              />
              <path
                fill="url(#vscodeIconsFileTypeKeyc)"
                d="M21.827 23.3a1.75 1.75 0 0 0 1.815.311c.753-.178.841-.666 1.373-1.022c.443-.266.93-.044 1.151-.577c.133-.4-.177-.888.088-1.288c.31-.577.842-.577.886-1.333c.045-.8-.575-.888-.8-1.421c-.265-.488.089-.8-.31-1.288a5.9 5.9 0 0 0-2.17-1.555c-.664-.133-1.151.444-1.86.4s-1.24-.578-1.948-.311c-1.284.533-.664 2.043-1.063 3.065a2.346 2.346 0 0 0 .133 2.665a11.232 11.232 0 0 0 .62 1.466c.443.71.93.4 1.594.577a1.205 1.205 0 0 1 .491.311Z"
              />
              <circle
                cx="22.787"
                cy="19.331"
                r="3.379"
                fill="url(#vscodeIconsFileTypeKey5)"
              />
              <path
                fill="url(#vscodeIconsFileTypeKeyd)"
                d="M26.327 18.292c-.048-.159-.048-.335-.1-.51a1.514 1.514 0 0 0-.354-.542a2.344 2.344 0 0 0-.531-.59c-.209-.16-.354-.415-.579-.51a3.867 3.867 0 0 1-.531-.239a4.4 4.4 0 0 0-.531-.351a3.888 3.888 0 0 0-1.421.027c-.933.143-2.043.143-2.557.908a9.276 9.276 0 0 0-.525 1.457a4.456 4.456 0 0 0-.225 1.116a4.613 4.613 0 0 0 .065 1.483c.161.638.74.989 1.158 1.467a4.4 4.4 0 0 0 1.03.845c.386.255.86.685 1.31.685a4.8 4.8 0 0 0 1.173-.255a3.2 3.2 0 0 0 1.2-.72c.384-.269.782-.2 1.008-.576s-.077-.554.444-1.654a2.247 2.247 0 0 0 .257-.957a2.861 2.861 0 0 0-.291-1.084Zm-3.539 4.576a3.5 3.5 0 1 1 3.531-3.5a3.516 3.516 0 0 1-3.531 3.5Z"
              />
              <circle
                cx="22.787"
                cy="19.331"
                r="3.313"
                fill="url(#vscodeIconsFileTypeKeye)"
              />
              <circle
                cx="22.787"
                cy="19.331"
                r="3.011"
                fill="url(#vscodeIconsFileTypeKey6)"
              />
              <circle
                cx="22.787"
                cy="19.331"
                r="2.951"
                fill="url(#vscodeIconsFileTypeKeyf)"
              />
              <path
                fill="url(#vscodeIconsFileTypeKey7)"
                d="M26.065 18.324c-.045-.149-.045-.313-.09-.477a1.414 1.414 0 0 0-.328-.506a2.167 2.167 0 0 0-.491-.551c-.194-.149-.328-.387-.536-.477a3.611 3.611 0 0 1-.491-.223a4.033 4.033 0 0 0-.492-.328a3.506 3.506 0 0 0-1.31-.03A3.1 3.1 0 0 0 20.182 17a6.5 6.5 0 0 0-.715 1a4.2 4.2 0 0 0-.209 1.043a4.33 4.33 0 0 0 .06 1.385c.149.6.685.924 1.073 1.37a4.085 4.085 0 0 0 .953.789a2.054 2.054 0 0 0 1.126.448a5.647 5.647 0 0 0 1.24-.133a2.959 2.959 0 0 0 1.122-.65c.348-.247.73-.161 1.225-1.52a6.414 6.414 0 0 0 .277-1.392a2.689 2.689 0 0 0-.269-1.016ZM22.787 22.6a3.27 3.27 0 1 1 3.27-3.27a3.27 3.27 0 0 1-3.27 3.27Z"
              />
              <path
                fill="#f48e84"
                d="M20.074 15.251s.326-.222 1.037.055a2.127 2.127 0 0 0 .576.177a.8.8 0 0 1-.716-.019a2.124 2.124 0 0 0-.897-.213Z"
              />
              <path
                fill="#fadae8"
                d="M22.749 15.428s.8-.436 1.211-.214a1.13 1.13 0 0 0-.657.037a2.216 2.216 0 0 1-.554.177Z"
              />
              <path
                fill="#9b1d20"
                d="M19.478 17.281a1.834 1.834 0 0 1 .385-.889a1.924 1.924 0 0 1 1.209-.588a5.586 5.586 0 0 0-1.034.515a1.437 1.437 0 0 0-.363.481c-.011.028-.092.2-.197.481Z"
              />
              <path
                fill="#54000d"
                d="M21.487 15.99a3.746 3.746 0 0 1 2.156-.192s.376.207.008.133a2.388 2.388 0 0 0-1.019-.14a3.6 3.6 0 0 0-1.115.251s-.089.007-.03-.052Z"
              />
              <path
                fill="#ca4849"
                d="M26.189 21.5s.111.605-.258.819s-.413.111-.413.111a.659.659 0 0 0 .509-.273a1.1 1.1 0 0 0 .162-.657Z"
              />
              <path
                fill="#f8cce0"
                d="M18.782 19.012a2.11 2.11 0 0 0 .207 1.668s-.155-.546-.2-.7a2.1 2.1 0 0 1-.007-.968Z"
              />
              <path
                fill="#f9d0e2"
                d="M19.794 22.4a1.009 1.009 0 0 0 .833.472a.72.72 0 0 1-.833-.472Z"
              />
              <path
                fill="#651116"
                d="M25.056 22.175s.109.023.341-.173a3.376 3.376 0 0 0 .422-.536a5.072 5.072 0 0 1-.4.57c-.073.064-.252.194-.363.139Z"
              />
              <path
                fill="#fadae8"
                d="M26.6 18.4a1.036 1.036 0 0 1 .5.841a1.333 1.333 0 0 0-.393-.7s-.232-.158-.107-.141Zm-.418-1.041a.824.824 0 0 0-.3-.753a1.04 1.04 0 0 1 .3.753Z"
              />
              <path
                fill="#b12328"
                d="M26.536 19.591c-.033.25-.122.594-.122.594a1.934 1.934 0 0 0 .168-.859c-.035-.157-.012.006-.046.265Z"
              />
              <path
                fill="#db726f"
                d="M23.244 23.643a1.979 1.979 0 0 0 .923-.34a3.408 3.408 0 0 1-.524.229c-.097.008-.384.068-.399.111Z"
              />
              <path
                fill="#f8c9dd"
                d="M22.971 22.927a2.591 2.591 0 0 0 1.285-.339a2.964 2.964 0 0 1-1.285.339Z"
              />
              <path
                fill="#651116"
                d="M23.607 23.153a3.013 3.013 0 0 1-.767.107c-.161 0-.635-.148-.025-.145a7.377 7.377 0 0 0 .993-.139s.341-.131.346-.13c.191.041-.161.202-.547.307Z"
              />
              <path
                fill="url(#vscodeIconsFileTypeKey8)"
                d="M16 5.5a5.1 5.1 0 0 0-2.6 9.482v1.345l1.05 1.343l-1.05 1.347l1.05 1.343l-1.05 1.34l1.05 1.346l-1.05 1.348l2.305 1.949l.185.157l.4-.336l2.093-1.754V15.1A5.1 5.1 0 0 0 16 5.5Zm0 1.464a2.122 2.122 0 0 1 2.34 1.787A2.123 2.123 0 0 1 16 10.54a2.121 2.121 0 0 1-2.34-1.789A2.12 2.12 0 0 1 16 6.964Z"
              />
              <path
                fill="url(#vscodeIconsFileTypeKey9)"
                d="M16 15.228a.712.712 0 0 0-.662.439a.729.729 0 0 0-.057.28v10.036l.151.128l.185.157l.275.232l.276-.231l.4-.336l.152-.128v-9.86a.729.729 0 0 0-.057-.28a.692.692 0 0 0-.381-.381a.729.729 0 0 0-.282-.056Z"
              />
              <path
                fill="url(#vscodeIconsFileTypeKeya)"
                d="M15.915 6.325a3.43 3.43 0 0 0-.42.032a4.234 4.234 0 0 1 .528-.032Zm.217 0a4.2 4.2 0 0 1 .737.084a4.214 4.214 0 0 0-.736-.083Zm-.748.047c-.066.01-.131.022-.2.035q.102-.019.201-.034Zm-.207.037a3.668 3.668 0 0 0 .001.001Zm-.2.047a4.021 4.021 0 0 0-.395.123q.192-.07.394-.122Zm-.395.123a3.806 3.806 0 0 0-.001.001Zm-.377.16a4.224 4.224 0 0 0-.005.001Zm-.357.193a6.646 6.646 0 0 0-.001.001Zm3.126-.5c.068.016.135.033.2.052q-.1-.027-.202-.051Zm.4.113c.065.022.128.046.192.071c-.066-.024-.13-.048-.195-.07Zm.744.336c.058.034.115.069.172.105l-.175-.104Zm.173.105c.056.036.112.074.167.113c-.058-.037-.113-.075-.17-.111Zm-4.611.055l-.084.059Zm-.084.059l-.081.059Zm-.161.12l-.079.064Zm-.156.129l-.075.067Zm5.572.067c.037.034.074.069.111.1c-.04-.031-.077-.065-.114-.099Zm.145.139l.071.072Zm-6.143.221c-.044.051-.088.1-.129.156c.038-.052.082-.105.126-.155Zm6.478.156c.042.053.082.106.121.161l-.124-.16Zm-6.731.162l-.059.084Zm-.059.084l-.055.084l.056-.084Zm-.16.257l-.051.089l.052-.089Zm-.1.179c-.015.03-.031.06-.045.091c.018-.031.033-.061.049-.091Zm-.045.091l-.041.088Zm-.084.187l-.039.095c.016-.033.029-.065.042-.096Zm-.039.095c-.013.032-.026.064-.037.1c.015-.038.024-.07.041-.101Zm-.037.1c-.012.032-.022.065-.033.1l.036-.105Zm-.065.195l-.029.1c.012-.039.018-.073.032-.106Zm8.059.118Zm-8.137.18l-.02.091l.02-.094Zm-.027.121a2.675 2.675 0 0 0 0-.001Zm-.035.2a4.588 4.588 0 0 0 0-.001Zm8.319.093a4.86 4.86 0 0 1 0-.003Zm-8.36.75a4.2 4.2 0 0 0 8.389 0c-.118 2.013-1.954.717-4.2.717s-4.071 1.293-4.189-.72Z"
              />
              <path
                fill="url(#vscodeIconsFileTypeKeyb)"
                d="M15.915 6.326a4.2 4.2 0 0 0-4.09 4.2c0 2.318 1.881.934 4.2.934s4.2 1.384 4.2-.934a4.2 4.2 0 0 0-4.2-4.2Zm.085.638a2.121 2.121 0 0 1 2.339 1.788A2.121 2.121 0 0 1 16 10.54a2.121 2.121 0 0 1-2.339-1.788A2.121 2.121 0 0 1 16 6.964Z"
              />
            </svg>
          </span>
          Comprar licencia
        </h2>
        <div className="div text-2xl text-center font-bold">
          {money.format(moneyPrice)}
        </div>
        <CardElement className="border p-2 mt-4" />
        <div className="des">
          <p className="text-gray-500 py-1">
            Adquiere todo el poder de la plataforma, con la licencia podras
            acceder a todas las funcionalidades de la plataforma
          </p>
          <div className="listy">
            <ul className="grid grid-cols-2 gap-1 py-1">
              <li className="bg-gray-100 text-start px-1 rounded-md border  py-1">
                Bodegas
              </li>
              <li className="bg-gray-100 text-start px-1 rounded-md border  py-1">
                Productos
              </li>
              <li className="bg-gray-100 text-start px-1 rounded-md border  py-1">
                Ventas
              </li>
              <li className="bg-gray-100 text-start px-1 rounded-md border  py-1">
                Compras
              </li>
              <li className="bg-gray-100 text-start px-1 rounded-md border  py-1">
                Reportes
              </li>
              <li className="bg-gray-100 text-start px-1 rounded-md border  py-1">
                Usuarios
              </li>
              <li className="bg-gray-100 text-start px-1 rounded-md border  py-1">
                Roles y modulos
              </li>
            </ul>
          </div>
        </div>
        <button className="bg-[#3498db]  text-white text-center block w-full p-2 rounded-full  ">
          Adquirir Licencia
        </button>
      </form>
    </>
  );
};

export const Licence = () => {
  const [state, setState] = useState(false);
  return (
    <div className="flex">
      <MenuLateral />
      <div className=" w-full block self_conte_fond h-screen ">
        <div className="content_users m-7">
          <div className="content_users_title">
            <h2 className="text-4xl font-bold text-gray-700 font-sans mx-0">
              Licencia
            </h2>
            <p className="text-xl text-gray-600 mt-4 mx-0">
              Preferincia de pago
            </p>
          </div>

          <div className="container_cont lg:min-w-7xl  ">
            <div className=" flex flex-col">
              <span className="text-xl">
                No se encontro ninguna licencia activa
              </span>

              <buttom
                className="bg-[#3498db] w-fit cursor-pointer  text-white p-2 my-2 inline-block"
                onClick={() => setState(!state)}
              >
                Comprar licencia
              </buttom>
            </div>
            <div className={state === false ? "hidden" : "block"}>
              <Elements stripe={stripePromise}>
                <FormLicence />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};