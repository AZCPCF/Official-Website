"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { playgroundVersionsArray } from "@/content/playground/playground-versions";
import { Code, Keyboard, Play } from "lucide-react";
import { Fragment, useState } from "react";

export const CodeEditor = ({
  placeholder,
  outputPlacehoder,
  shortcuts,
  outputTitle,
  runButtonLabel,
}: {
  placeholder: string;
  shortcuts: { title: string; keys: string[]; seprator?: string };
  outputTitle: string;
  outputPlacehoder: string;
  runButtonLabel: string;
}) => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState(outputPlacehoder);
  const [selectedVersion, setSelectedVersion] = useState(
    playgroundVersionsArray[0].value
  );

  const handleRunCode = () => {
    setOutput(
      `Running code on version: ${selectedVersion}\n\n${outputPlacehoder}`
    );
  };

  const handleClearCode = () => {
    setCode("");
    setOutput("");
  };

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-4">
        <Select
          value={selectedVersion}
          onValueChange={(value) => setSelectedVersion(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select version" />
          </SelectTrigger>
          <SelectContent>
            {playgroundVersionsArray.map((version, index) => (
              <SelectItem
                key={"playground-version-" + index}
                value={version.value}
              >
                {version.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          onClick={handleRunCode}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Play className="h-4 w-4 mr-2" />
          {runButtonLabel}
        </Button>
      </div>

      <textarea
        className="w-full min-h-40 h-80 p-4 border rounded-lg font-mono text-sm bg-gray-200 dark:text-white text-neutral-800 border-gray-300 dark:border-gray-700 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:bg-[#121212]"
        placeholder={placeholder}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={(e) => {
          if (e.ctrlKey && e.key === "Enter") {
            handleRunCode();
          } else if (e.ctrlKey && e.shiftKey && e.key === "C") {
            handleClearCode();
          }
        }}
      />

      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-muted-foreground mt-2">
        <Keyboard className="h-4 w-4" />
        <span>{shortcuts.title}:</span>
        {shortcuts.keys.map((item, index, self) => (
          <Fragment key={index}>
            <span>{item}</span>
            {self.length - 1 !== index && (
              <span>{shortcuts.seprator || "|"}</span>
            )}
          </Fragment>
        ))}
      </div>

      <div className="space-y-2 mt-4">
        <h3 className="text-lg font-semibold text-black dark:text-white flex items-center gap-2">
          <Code className="h-5 w-5 text-green-600" />
          {outputTitle}
        </h3>
        <div className="w-full h-52 overflow-scroll p-4 border rounded-lg font-mono text-sm bg-gray-200 dark:text-white/60 text-neutral-800/60 dark:bg-[#121212] border-gray-300 dark:border-gray-700">
          {output}
        </div>
      </div>
    </>
  );
};
