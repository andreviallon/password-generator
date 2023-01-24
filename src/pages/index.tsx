import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { GeneratedPassword } from "@/components/GeneratedPassword";
import { PasswordStrength } from "@/components/PasswordStrength";
import { Slider } from "@/components/Slider";
import { useState } from "react";
import Head from "next/head";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

enum Settings {
  UPPERCASE = "uppercase",
  NUMBERS = "numbers",
  SYMBOLS = "symbols",
}

export default function Home() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [strength, setStrength] = useState(2);
  const [sliderVal, setSliderVal] = useState(10);
  const [settings, setSettings] = useState({
    uppercase: false,
    numbers: false,
    symbols: false,
  });

  const notify = () => toast("Password copied to clipboard!");

  const togglePreference = (setting: Settings) => {
    const newSetting = (settings[setting] = !settings[setting]);

    setSettings((prev) => {
      return { ...prev, newSetting };
    });
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    notify();
  };

  const handleSliderValue = (e: number): void => {
    setSliderVal(e);
    if (e < 9) setStrength(1);
    else if (e < 12) setStrength(2);
    else if (e < 15) setStrength(3);
    else setStrength(4);
  };

  const handleGeneratePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "@#&(§!-)^$*%+=/?";
    let passwordCharOptions = "abcdefghijklmnopqrstuvwxyz";
    let password = "";

    if (settings.uppercase) passwordCharOptions += uppercaseChars;
    if (settings.numbers) passwordCharOptions += numbersChars;
    if (settings.symbols) passwordCharOptions += symbolsChars;

    for (let i = 0; i < sliderVal; i++) {
      password += passwordCharOptions.charAt(
        Math.floor(Math.random() * passwordCharOptions.length)
      );
    }

    setGeneratedPassword(password);
  };

  return (
    <>
      <Head>
        <title>Password Generator</title>
        <meta name="description" content="Password Generator" />
      </Head>
      <main className="bg-zinc-900 w-screen h-screen">
        <div className="container mx-auto w-96 h-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-slate-400">Password Generator</h1>
          <div className="card">
            {generatedPassword ? (
              <GeneratedPassword
                generatedPassword={generatedPassword}
                onClick={handleCopyToClipboard}
              />
            ) : (
              <p>No password generated</p>
            )}
          </div>
          <div className="card flex flex-col gap-4">
            <Slider onSliderValueChange={(e) => handleSliderValue(e)} />

            <div className="flex flex-col gap-1 ">
              <Checkbox
                label="Include uppercase letter"
                isChecked={settings.uppercase}
                onCheck={() => togglePreference(Settings.UPPERCASE)}
              />
              <Checkbox
                label="Include numbers"
                isChecked={settings.numbers}
                onCheck={() => togglePreference(Settings.NUMBERS)}
              />
              <Checkbox
                label="Include symbols"
                isChecked={settings.symbols}
                onCheck={() => togglePreference(Settings.SYMBOLS)}
              />
            </div>
            <PasswordStrength strengthLevel={strength} />
            <div className="w-full flex">
              <Button name="Generate" onClick={handleGeneratePassword} />
            </div>
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </main>
    </>
  );
}
